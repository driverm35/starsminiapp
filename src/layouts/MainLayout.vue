<template>
  <div class="min-h-screen bg-gray-900 relative">
    <div class="relative z-10">
      <slot />
    </div>
  </div>

  <Navbar />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
