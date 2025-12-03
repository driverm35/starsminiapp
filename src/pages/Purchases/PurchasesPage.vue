<template>
  <MainLayout>
    <h1 class="text-xl font-bold px-4 mt-3">Ваши покупки</h1>

    <div class="mt-4 px-4 flex flex-col gap-3">
      <div
        v-for="p in purchases"
        :key="p.id"
        class="bg-gray-800 p-4 rounded-xl"
      >
        <div class="flex justify-between">
          <span class="font-semibold">{{ p.username }}</span>
          <span class="text-yellow-300">{{ p.stars }} ⭐</span>
        </div>

        <div class="text-sm text-gray-400 mt-1">
          {{ p.amount }} ₽
        </div>

        <div class="text-sm mt-1">
          Статус: {{ p.status }}
        </div>

        <div class="text-xs text-gray-500 mt-2">
          ID: {{ p.payment_id }} • {{ p.date }}
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";

const purchases = [
  { id: 1, username: "@user", stars: 300, amount: 480, status: "Оплачено", payment_id: "AB123", date: "01.12.2025" }
];
</script>
