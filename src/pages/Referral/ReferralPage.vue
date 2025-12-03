<template>
  <MainLayout>
    <h1 class="text-xl font-bold px-4 mt-4">Реферальная программа</h1>

    <div class="px-4 mt-4">
      <p class="text-gray-300">
        Приглашай друзей и получай до 10% от их покупок!
      </p>

      <div class="bg-gray-800 p-4 rounded-xl mt-4">
        <p class="text-sm text-gray-400">Ваша ссылка:</p>
        <p class="font-mono break-all mt-1">{{ link }}</p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";

const link = "https://t.me/your_bot?start=ref123";
</script>
