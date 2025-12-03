<template>
  <MainLayout>
    <div class="flex flex-col items-center mt-20 px-4">
      <div class="text-6xl">🎉</div>

      <h1 class="text-2xl font-bold mt-4">Оплата прошла успешно!</h1>

      <p class="text-gray-300 text-center mt-3">
        Вам начислено {{ stars }} ⭐
      </p>

      <button
        class="btn-primary mt-10 w-4/5"
        @click="$router.push('/')"
      >
        На главную
      </button>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";

const stars = localStorage.getItem("stars_amount") || 0;
</script>
