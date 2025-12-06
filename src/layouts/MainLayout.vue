<template>
  <div class="flex flex-col min-h-screen bg-gray-900 relative :md max-w-180 mx-auto">

    <!-- Прокручиваемый контент -->
    <div class="flex flex-col grow overflow-y-auto relative z-10">
      <slot />
    </div>

    <!-- Нижняя навигация -->
    <Navbar class="fixed bottom-0 left-0 right-0 h-17 z-50" />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
