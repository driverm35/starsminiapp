<template>
  <button
    :class="[
      'w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors',
      selected
        ? 'bg-blue-600 text-white'
        : 'bg-gray-800 text-white/80 hover:bg-gray-700'
    ]"
    @click="select"
  >
    <div
      class="icon-mask w-6 h-6 bg-yellow-400"
      style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
    ></div>

    <span class="grow text-start">{{ value }}</span>
    <span class="font-semibold">{{ Math.round(value * 1.6) }} ₽</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number;
  selected?: boolean;
}>();

const emit = defineEmits<{
  (e: "select", value: number): void;
}>();

// Реактивно следим за props.selected
const selected = computed(() => props.selected === true);

function select() {
  emit("select", props.value);
}
</script>
