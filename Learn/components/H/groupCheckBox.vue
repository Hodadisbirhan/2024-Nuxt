<script setup>
import { useField } from "vee-validate";
const props = defineProps({
  values: { type: [Object, Array] },
  rule: { type: [String] },
  name: { type: [String] },
});

const { value: groupValue, errorMessage } = useField(props.name, props.rule);

const model = defineModel();
if (model?.length != 0) {
  groupValue.value = model.value;
}
watch(
  model,
  (newInt) => {
    groupValue.value = newInt;
  },
  { deep: true }
);
</script>

<template>
  <div>
    <div class="flex gap-3">
      <h-check-box
        v-for="data in props.values"
        :key="data.id"
        :name="data.name"
        v-model="model"
        :id="data.id"
        :value="data.value" />
    </div>
    <span class="text-xs text-red-900">{{ errorMessage }}</span>
  </div>
</template>
