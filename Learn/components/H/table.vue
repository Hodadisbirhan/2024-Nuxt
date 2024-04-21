<script setup>
const allSelected = ref([]);

const individualSelected = ref([]);
const sortedValue = ref(null);
const props = defineProps({
  headers: {
    type: [Object],
    default: [],
  },
  body: {
    type: [Object],
    default: [],
  },

  hasCheckBox: {
    type: Boolean,
    default: false,
  },
});
const allIDs = computed(() => {
  return [
    ...props.body.map((v) => {
      return v.id;
    }),
  ];
});

watchEffect(() => {
  console.log(allIDs.value.value);
});

const emits = defineEmits(["selected:row", "rowClicked", "sortedBy"]);

const allClicked = () => {
  console.log(allSelected.value.length);

  if (allSelected.value.length) {
    individualSelected.value = [...allIDs.value];
  } else {
    individualSelected.value = [];
  }
  emits("selected:row", individualSelected.value);
};

const singleSelected = () => {
  console.log(
    individualSelected.value.length === allIDs.value.length,
    " is  that"
  );
  if (individualSelected.value.length === allIDs.value.length) {
    allSelected.value = ["all"];
  } else {
    allSelected.value = [];
  }

  console.log(individualSelected.value);
  emits("selected:row", individualSelected.value);
};

const rowClicked = (id) => {
  emits("rowClicked", id);
};

const sortedBy = (value) => {
  if (value === sortedValue.value) {
    sortedValue.value = null;
    emits("sortedBy", null);
  } else {
    sortedValue.value = value;
    emits("sortedBy", value);
  }
};
</script>

<template>
  <div class="w-full overflow-x-auto px-3">
    <table class="border-collapse w-full min-w-[50rem] rounded font-body px-2">
      <thead class="w-full bg-slate-400">
        <tr>
          <input
            type="checkbox"
            v-if="hasCheckBox"
            value="all"
            @change="allClicked"
            v-model="allSelected"
            class="" />
          <td
            class="text-gray-900 cursor-move font-medium hover:bg-slate-300 text-[15px]"
            v-for="head in headers"
            :key="head"
            @click="sortedBy(head)">
            {{ head }}
            <span
              class="text-lg font-medium"
              v-if="sortedValue === head"
              >&uparrow;</span
            >
            <span
              class="text-lg font-medium"
              v-else
              >&downarrow;</span
            >
          </td>
        </tr>
      </thead>
      <tbody class="w-full">
        <tr
          v-for="(row, i) in body"
          :key="row"
          class="odd:bg-slate-200 active:bg-gray-600 text-gray-500 active:text-white cursor-pointer hover:bg-slate-300 border-t-2 border-solid text-[1rem]"
          @click.stop="rowClicked(row.id)">
          <input
            v-if="hasCheckBox"
            type="checkbox"
            :value="row.id"
            :id="row.id"
            @click.stop="null"
            @change="singleSelected()"
            v-model="individualSelected" />

          <td
            v-for="head in headers"
            :key="head"
            class="text-base font-normal">
            <slot
              :name="head"
              :row="row"></slot>
          </td>
        </tr>
      </tbody>
    </table>
    <slot
      name="footer"
      value="the End of the table"></slot>
  </div>
</template>
