<script setup>
import draggable from "vuedraggable";
import { nanoid } from "nanoid";
import { useData } from "~/store/useData";
const store = useData();
const alt = useKeyModifier("Alt");
const addCategory = ref("");
const focus = ref(false);

useCallOnce();
const columns = ref([
  {
    id: nanoid(),

    name: "Web Development",
    tasks: [
      { id: nanoid(), title: "design web" },
      { id: nanoid(), title: "Implementing web" },
      { id: nanoid(), title: "Deploying web" },
    ],
  },
  {
    id: nanoid(),

    name: "Mobile Development",
    tasks: [
      { id: nanoid(), title: "design mobile" },
      { id: nanoid(), title: "Implementing mobile" },
      { id: nanoid(), title: "Deploying mobile" },
    ],
  },
  {
    id: nanoid(),

    name: "SEO Development",
    tasks: [
      { id: nanoid(), title: "design SEO" },
      { id: nanoid(), title: "Implementing SEO" },
      { id: nanoid(), title: "Deploying SEO" },
    ],
  },
  {
    id: nanoid(),

    name: "Desktop App Development",
    tasks: [
      { id: nanoid(), title: "design Desktop App" },
      { id: nanoid(), title: "Implementing Desktop App" },
      { id: nanoid(), title: "Deploying Desktop App" },
    ],
  },
]);

const changeData = () => {
  store.oneData = "here is my value change by [id].vue page ";
};

const createCategory = () => {
  if (addCategory.value) {
    columns.value.push({ name: addCategory.value, id: nanoid(), tasks: [] });

    addCategory.value = "";
    focus.value = false;
  }
};
const deleteCategory = (id) => {
  columns.value = columns.value.filter((element) => {
    return element.id !== id;
  });
};
</script>

<template>
  <div
    class="w-[100vw] min-h-screen flex flex-col gap-10 items-center justify-center bg-[#020420]">
    <h1
      class="font-semibold text-base font-serif text-slate-500 py-2 px-6 rounded bg-slate-100 capitalize">
      This is the todo app that you can performing drag and drop
    </h1>
    <draggable
      item-key="id"
      handle=".drag-handle"
      :animation="500"
      :group="{ name: 'columns', pull: alt ? 'clone' : true }"
      class="flex gap-4 justify-center items-stretch flex-wrap"
      v-model="columns">
      <template #item="{ element: column }">
        <div>
          <h-category
            :column="column"
            @delete-category="deleteCategory" />
        </div>
      </template>
      <template #footer>
        <div
          class="bg-[#00172A] column border transform duration-300 hover:shadow-none hover:drop-shadow-none border-gray-800 px-8 py-7 flex flex-col gap-7 rounded-md">
          <input
            v-model="addCategory"
            type="text"
            @focus="focus = true"
            @blur="focus = false"
            @keyup.enter="
              ($event) => {
                createCategory();
                $event.target.blur();
              }
            "
            @keydown.tab="createCategory"
            :placeholder="!focus ? '+ Add Card' : 'Enter the name of the card'"
            :class="[
              focus ? 'bg-gray-800/50' : 'hover:cursor-pointer bg-transparent',
            ]"
            class="w-full outline-none focus:border focus:border-blue-400 placeholder:text-slate-400 text-xs px-3 text-purple-400 font-medium rounded py-2" />
        </div>
      </template>
    </draggable>
    <pre class="text-gray-200">{{ columns }}</pre>
    <span>{{ store.oneData }}</span>
    <button @click="changeData">Change IT</button>
    <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
  </div>
</template>
