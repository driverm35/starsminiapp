<template>
  <MainLayout>
    <!-- Верхняя панель -->
    <div class="grid grid-cols-6 gap-2 text-2xl justify-between p-4 items-center shrink-0 bg-gray-900">
      <div class="col-start-1 col-end-2 flex items-center">
        <BackButton />
      </div>
      <button
        class="col-span-4 col-start-2 w-full px-6 py-2 text-xl text-center
               text-white font-medium rounded-full flex items-center justify-center gap-2"
      >
        Ваши покупки
      </button>
      <div
        class="col-span-1 flex justify-center bg-gray-800/90 rounded-full size-11 items-center"
        @click="$router.push('/buy/self')"
      >
        <div
          class="icon-mask w-11 h-11 bg-white"
          style="mask-image: url('/icons/message.svg'); -webkit-mask-image: url('/icons/message.svg');"
        ></div>
      </div>
    </div>

    <div class="mt-4 px-4 flex flex-col gap-3">
      <span>История транзакций</span>
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
import BackButton from "@/components/ui/BackButton.vue";

const purchases = [
  { id: 1, username: "@user", stars: 300, amount: 480, status: "Оплачено", payment_id: "AB123", date: "01.12.2025" }
];
</script>
