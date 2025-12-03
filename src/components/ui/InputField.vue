<template>
  <div class="w-full bg-gray-800 rounded-xl px-4 py-3 flex items-center gap-3">
    <span v-if="icon" class="text-gray-400 text-xl">{{ icon }}</span>

    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      class="bg-transparent outline-none w-full text-white text-base"
    />

    <span v-if="suffix" class="text-gray-300 text-sm">
      {{ suffix }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string | number;
  placeholder?: string;
  icon?: string;
  suffix?: string;
  type?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v)
});
</script>
