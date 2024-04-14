<template>
  <div
    @focus="focus = true"
    @blur="focus = false"
    class="task focus:border focus:border-primary flex gap-2 items-center px-3 py-2 rounded bg-gray-800/50 border border-gray-800 text-gray-400 outline-none"
    tabindex="0">
    <Icon
      name="material-symbols:home-iot-device-outline"
      class="drag-handle cursor-move">
    </Icon>

    <span class="text-xs font-medium">{{ text?.title }}</span>
  </div>
</template>

<script setup>
const focus = ref(false);

const props = defineProps({
  text: {
    type: [Object],
    required: true,
  },
});

const emits = defineEmits(["deleteTask"]);

onKeyStroke("Delete", (e) => {
  if (focus.value) {
    emits("deleteTask", props?.text?.id);
  }
});
</script>
<style scoped>
.sortable-drag .task {
  transform: rotate(5deg);
}
.sortable-ghost .task {
  position: relative;
}

.sortable-ghost .task::after {
  content: "";

  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}
</style>
