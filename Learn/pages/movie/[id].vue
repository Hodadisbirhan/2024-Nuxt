<script setup>
import draggable from "vuedraggable";
import { nanoid } from "nanoid";
import gsap from "gsap";
// import { useData } from "~/store/useData";
// const store = useData();
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
const number = ref(0);
const tweend = reactive({ number: 0 });

const changeData = () => {
  store.oneData = "here is my value change by [id].vue page ";
};

gsap.to(tweend, { duration: 0.5, number: Number(1000) });
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

const { data } = useFetch("/api/data", { pick: [["name"]] });
</script>

<template>
  <div
    class="w-[100vw] min-h-screen flex flex-col gap-10 items-center justify-center bg-[#020420]">
    <p class="text-white">{{ tweend.number?.toFixed(0) }}</p>
    <h1
      class="font-bold font-serif text-slate-500 py-4 rounded-md px-6 bg-gray-900 mt-7 text-lg">
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
    <span class="text-gray-200">{{ store?.oneData }}</span>
    <button
      @click="changeData"
      class="text-gray-200">
      Change IT
    </button>
    <!-- <NuxtLink
      :to="{ name: 'index' }"
      class="text-gray-200"
      >Home</NuxtLink
    > -->

    <p class="text-white">
      {{ data }}
      <input
        type="number"
        step="any"
        v-model.number="number"
        class="text-gray-900" />
    </p>
  </div>
</template>
