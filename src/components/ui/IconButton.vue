<template>
  <button class="w-13 h-13 bg-white/20 rounded-full flex items-center justify-center">
    {{ icon }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>();
</script>
