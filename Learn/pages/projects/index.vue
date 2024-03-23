<template>
  <div class="">
    <div class="w-[20rem] mx-auto py-[10rem]">
      <h-drop-down
        :data="searchedValue"
        :with-search="true"
        placeholder="select Name"
        v-model="search"
        @click:item="clickItem"
        :loading="true">
        <template #selectedOption="{ item }">
          {{ item.text }}
        </template>
        <template #footer>
          <div
            class="flex items-center text-xs text-slate-400 font-normal gap-3">
            <Icon name="uil:search"></Icon>
            <span class="capitalize there is something in the Loading"
              >show that
            </span>
          </div>
        </template>

        <template #selectedValue="{ item }">
          <div class="flex items-center justify-center gap-5">
            <span class="w-6 h-6 rounded-[100%] bg-blue-800"></span> {{ item }}
          </div>
        </template>
      </h-drop-down>
    </div>

    <div
      class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 bg-slate-100 px-4 py-5">
      <div
        v-for="item in 10"
        :key="item"
        class="flex py-3 px-2 rounded-md flex-col container gap-3 md:max-w-80 w-full bg-slate-50 border-2 border-white hover:border-gray-200 cursor-pointer">
        <div class="flex items-center gap-4">
          <div
            class="relative flex items-center justify-center gap-3 group w-[5rem] h-[5rem] bg-slate-200">
            <Icon
              name="material-symbols:digital-out-of-home-rounded"
              size="2rem"
              class="text-gray-400 text-3xl"></Icon>
            <div
              class="flex flex-col absolute left-[100%] top-0 before:content-[' '] before:absolute before:top-[45%] before:w-[40px] before:block before:-z-10 before:h-[40px] before:bg-white before:-left-2 before:rotate-45 shadows w-[10rem] py-3 bg-white rounded border border-lime-50 invisible group-hover:visible z-10 font-normal min-h-[10rem] px-3">
              <div class="flex gap-2 mb-3">
                <Icon
                  name="uil:phone"
                  class="text-2xl text-gray-400 w-7 h-8 bg-gray-400 rounded"></Icon>
                <h2 class="font-medium text-gray-400">Market Plc</h2>
              </div>
              <div class="flex text-sm text-gray-300 gap-2">
                <Icon
                  name="uil:phone"
                  class="text-lg text-gray-400"></Icon>
                <span>N.A</span>
              </div>
              <div class="flex text-sm text-gray-300 gap-2">
                <Icon
                  name="uil:phone"
                  class="text-lg text-gray-400"></Icon>
                <span>N.A</span>
              </div>
              <div class="flex text-sm text-gray-300 gap-2">
                <Icon
                  name="uil:phone"
                  class="text-lg text-gray-400"></Icon>
                <span>N.A</span>
              </div>
            </div>
          </div>

          <h2 class="text-xl font-bold text-gray-400">Auto Electrician</h2>
        </div>

        <p class="text-gray-400 text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum
          cupiditate asperiores, suscipit accusamus praesentium ut eaque rem
          impedit fuga perferendis culpa, blanditiis ad, vero quidem velit
          repellendus nulla cumque?
        </p>
        <div class="flex justify-between py-3">
          <div class="flex text-gray-400 gap-1 items-center">
            <Icon
              name="material-symbols:calendar-month-rounded"
              size="1rem">
            </Icon>

            <span class="text-xs">12/4/2020</span>
          </div>

          <div class="flex text-gray-400 gap-1 items-center">
            <Icon
              name="material-symbols:visibility-rounded"
              size="1rem">
            </Icon>
            <span class="text-xs">20</span>
          </div>
          <div class="flex text-gray-400 gap-1 items-center">
            <Icon name="material-symbols:code"></Icon>
            <span class="text-xs">2.1k</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = ref([
  { value: "hofafis", text: "birhan" },
  { value: "Abeba", text: "Muluken" },
  { value: "Mikias", text: "Animut" },
  { value: "henock", text: "mul" },
  { value: "alem", text: "bayush" },
  { value: "biniam", text: "sda" },
]);

const search = ref("");

const searchedValue = computed(() => {
  console.log("computed", search.value);
  return data.value.filter((value) => {
    return value.text
      .toUpperCase()
      .startsWith(search.value.toLocaleUpperCase());
  });
});

const clickItem = (value) => {
  console.log(value);
  search.value = "";
};
definePageMeta({ colorMode: "dark" });
</script>
