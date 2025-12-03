<template>
  <button
    @click="model = value"
    :class="['px-4 py-3 rounded-xl border',
      model === value ? 'bg-blue-600 border-blue-400' : 'bg-gray-800 border-gray-700']"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ name: string; value: string; modelValue?: string }>();
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (v: string | undefined) => emit("update:modelValue", v)
});
</script>
