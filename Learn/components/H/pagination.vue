<script setup>
const props = defineProps({
  totalData: {
    type: [Number],
    required: true,
  },
  dataPerPage: {
    type: [Number],
    required: true,
  },
  offset: {
    type: [Number],
    default: 1,
  },
});
const emits = defineEmits(["updateOffset"]);
const currentPage = ref(props.offset);

const numberOfPages = computed(() => {
  return Math.ceil(props.totalData / props.dataPerPage);
});

const show = (item) => {
  return (
    item == currentPage.value ||
    numberOfPages.value < 6 ||
    item <= 2 ||
    item >= numberOfPages.value - 1 ||
    (item <= currentPage.value + 2 && item >= currentPage.value - 2) ||
    (currentPage.value >= numberOfPages.value - 2 &&
      currentPage.value <= numberOfPages.value &&
      item >= numberOfPages.value - 5 &&
      item <= numberOfPages.value) ||
    (currentPage.value >= 1 && currentPage.value < 6 && item >= 1 && item <= 6)
  );
};

const next = () => {
  if (currentPage.value < numberOfPages.value) {
    currentPage.value++;
    emits("updateOffset", (currentPage.value - 1) * props.dataPerPage);
  }
};
const prev = () => {
  if (currentPage.value !== 1) {
    currentPage.value--;
    emits("updateOffset", (currentPage.value - 1) * props.dataPerPage);
  }
};

const updatePage = (value) => {
  emits("updateOffset", (value - 1) * props.dataPerPage);
  currentPage.value = value;
};
const firstThree = computed(() => {
  if (numberOfPages.value >= 6) return currentPage.value >= 6;
  return false;
});

const lastThree = computed(() => {
  if (numberOfPages.value >= 6)
    return currentPage.value < numberOfPages.value - 4;
});
</script>

<template>
  <div class="w-full">
    <div class="w-full h-[0.125rem] bg-blue-500"></div>
    <div class="w-full flex justify-between items-center">
      <button
        :disabled="currentPage === 1"
        @click="prev"
        class="disabled:text-slate-300 text-blue-600">
        <Icon name="material-symbols:arrow-back-ios" />
      </button>
      <div class="flex gap-5 items-center">
        <div
          v-for="item in numberOfPages"
          :key="item"
          :class="[show(item) ? 'block' : 'hidden']">
          <a
            class="px-3"
            v-if="item == numberOfPages - 1 && lastThree"
            herf="#"
            >...</a
          >

          <a
            v-if="show(item)"
            href="#"
            :class="[
              currentPage === item
                ? 'text-blue-900 font-bold text-2xl scale-150 before:left-0 before:right-0 '
                : 'text-slate-600 text-sm font-medium before:left-[50%] before:right-[50%] ',
            ]"
            @click.prevent="updatePage(item)"
            class="no-underline before:content-[''] before:h-1 relative before:absolute before:-top-[0.35rem] before:bg-blue-600"
            >{{ item }}</a
          >
          <a
            class="px-3"
            v-if="item == 2 && firstThree"
            herf="#"
            >...</a
          >
        </div>
      </div>

      <button
        :disabled="currentPage === numberOfPages"
        @click="next"
        class="disabled:text-slate-300 text-blue-600">
        <Icon name="material-symbols:arrow-forward-ios-rounded" />
      </button>
    </div>
  </div>
</template>
