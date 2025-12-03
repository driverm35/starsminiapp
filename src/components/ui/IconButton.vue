<template>
  <button class="w-15 h-15 bg-white/20 rounded-full flex items-center justify-center">
    {{ icon }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>();
</script>
