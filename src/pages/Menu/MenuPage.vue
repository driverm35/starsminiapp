<template>
  <MainLayout>
    <h1 class="text-xl font-bold px-4 mt-4">Меню</h1>

    <div class="px-4 mt-4 flex flex-col gap-3">
      <router-link class="btn-secondary" to="/purchases">Ваши покупки</router-link>
      <router-link class="btn-secondary" to="/referral">Реферальная программа</router-link>
      <a class="btn-secondary" href="https://t.me/support" target="_blank">Поддержка</a>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>
