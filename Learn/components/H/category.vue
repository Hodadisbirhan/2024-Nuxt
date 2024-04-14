<script setup>
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
const props = defineProps({
  column: {
    type: [Object, Array],
    default: {},
  },
});

const emits = defineEmits(["deleteCategory"]);
const focus = ref(false);
const addTask = ref("");

const alt = useKeyModifier("Alt");

const deleteTask = (taskID) => {
  props.column.tasks = props.column.tasks.filter((element) => {
    return element.id !== taskID;
  });
};
const deleteCategory = () => {
  if (!props.column.name) {
    emits("deleteCategory", props.column.id);
  }
};

const createTask = () => {
  if (addTask.value) {
    props.column.tasks.push({ title: addTask.value, id: nanoid() });
    addTask.value = "";
    focus.value = false;
  } else {
    focus.value = false;
  }
};
</script>

<template>
  <div
    class="bg-[#00172A] column border transform duration-300 hover:shadow-none hover:drop-shadow-none border-gray-800 px-8 py-7 flex flex-col gap-7 rounded-md">
    <h2 class="font-bold flex tracking-wide text-gray-500 items-center gap-3">
      <Icon
        name="material-symbols:home-iot-device-outline"
        class="drag-handle cursor-move" />
      <input
        v-model="column.name"
        class="bg-transparent focus:bg-gray-800/50"
        type="text"
        @keyup.enter="$event.target.blur()"
        @keydown.backspace="deleteCategory" />
    </h2>
    <draggable
      v-model="column.tasks"
      :group="{ name: 'task', pull: alt ? 'clone' : true }"
      ghostClass="sortable-ghost"
      dragClass="sortable-drag"
      handle=".drag-handle"
      item-key="id"
      :animation="150"
      class="flex flex-col gap-3">
      <template #item="{ element: task }">
        <h-task
          :text="task"
          @delete-task="deleteTask"></h-task>
      </template>
      <template #footer>
        <div>
          <input
            @blur="focus = false"
            @focus="focus = true"
            @keyup.enter="createTask"
            @keydown.tab="createTask"
            v-model="addTask"
            type="text"
            :placeholder="!focus ? '+ Add Task' : 'Enter the name of the Task'"
            :class="[
              focus ? 'bg-gray-800/50' : 'hover:cursor-pointer bg-transparent',
            ]"
            class="w-full outline-none focus:border focus:border-blue-400 placeholder:text-slate-400 text-xs px-3 text-purple-400 font-medium rounded py-2" />
        </div>
      </template>
    </draggable>
  </div>

  <div></div>
</template>
<style>
.sortable-drag .column {
  @apply rotate-6;
}
.sortable-ghost .column {
  position: relative;
}

.sortable-ghost .column::after {
  content: "";

  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}
</style>
