<script setup>
const props = defineProps({
  name: { type: [String, Object] },
  id: { type: [String] },
  value: { type: [String] },
});

const emits = defineEmits(["update:modelValue"]);

const value = defineModel();
</script>

<template>
  <input
    type="checkbox"
    v-model="value"
    :id="id"
    :value="props.value"
    :name="name" />
</template>
