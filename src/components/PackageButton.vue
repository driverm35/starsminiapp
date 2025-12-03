<template>
  <button class="bg-gray-800 px-4 py-3 rounded-xl flex justify-between items-center">
    <span>⭐ {{ value }}</span>
    <span class="font-semibold">{{ Math.round(value * 1.6) }} ₽</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ value: number }>();
</script>
