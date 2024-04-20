<template>
  <div class="w-full gap-0 relative">
    <button
      type="button"
      ref="target"
      class="border-2 text-start relative hover:border-gray-600 active:border-black px-2 py-2 w-full rounded"
      @click="show = !show">
      <slot
        name="selectedValue"
        :item="value" />
      <span v-if="!value">
        {{ placeholder }}
      </span>

      <Icon
        v-if="show"
        class="text-sm font-medium absolute top-[30%] right-1"
        name="material-symbols:keyboard-arrow-up"></Icon>

      <Icon
        v-else
        class="text-sm font-medium absolute top-[30%] right-1"
        name="material-symbols:keyboard-arrow-down"></Icon>
    </button>

    <ul
      ref="ignoreElRef"
      v-on-click-outside="onClickOutsideHandler"
      class="flex absolute top-[110%] bg-white z-40 left-0 flex-col divide-y-2 w-full shadow-lg drop-shadow-md max-h-[10rem] overflow-y-auto border rounded"
      v-if="show">
      <input
        v-if="withSearch"
        class="w-full rounded border py-1 border-slate-400 px-3"
        v-model="search"
        v-focus />

      <div
        v-show="loading"
        class="bg-gray-400 h-full loading-bar"></div>

      <li
        v-for="item in data"
        :key="item.value"
        class="px-2 cursor-pointer py-2"
        @click="clickItem(item)">
        <slot
          name="selectedOption"
          :item="item" />
      </li>
      <li>
        <slot name="footer"> </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { vOnClickOutside } from "@vueuse/components";

const show = ref(false);

const target = ref();
const ignoreElRef = ref();
const value = ref("");

const vFocus = {
  mounted: (el) => el.focus(),
};
const onClickOutsideHandler = [
  (ev) => {
    console.log(ev);
    show.value = false;
  },
  { ignore: [ignoreElRef, target] },
];

const emits = defineEmits(["update:modelValue", "click:item"]);
const props = defineProps({
  data: {
    type: [Array, Object],
  },
  withSearch: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: [String, Boolean, Number],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const search = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    console.log(value);
    emits("update:modelValue", value);
  },
});

const clickItem = (item) => {
  show.value = false;
  value.value = item.text;
  emits("click:item", item);
};
</script>
