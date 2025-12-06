<template>
  <div
    @click="model = value"
    :class="[
      'px-4 py-4 rounded-xl flex items-center justify-between cursor-pointer transition-colors',
      model === value ? 'bg-blue-600 border-blue-400' : 'bg-gray-800 border-gray-700'
    ]"
  >
    {{ name }}

    <!-- Иконки -->
    <div class="flex items-center gap-2">
      <img
        v-for="ic in iconsList"
        :key="ic"
        :src="`/icons/${ic}.svg`"
        class="w-6 h-6"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  value: string;
  modelValue?: string;
  icon: string;
}>();

const emit = defineEmits(["update:modelValue"]);

// v-model поддержка
const model = computed({
  get: () => props.modelValue,
  set: (v: string | undefined) => emit("update:modelValue", v)
});

// массив иконок
const iconsList = computed(() =>
  props.icon
    .split(",")
    .map(i => i.trim())
    .filter(Boolean)
);
</script>
