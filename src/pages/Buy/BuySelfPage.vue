<template>
  <MainLayout>
    <BackButton />

    <h1 class="text-xl font-bold px-4 mt-2">Укажите количество звезд</h1>

    <div class="px-4 mt-3">
      <div class="w-4/5 mx-auto bg-gray-800 px-4 py-3 rounded-xl flex items-center justify-between">
        <span class="text-gray-400">Введите от 50 до 9000</span>
        <span class="font-semibold">{{ rubles }} ₽</span>
      </div>

      <input
        v-model="amount"
        type="number"
        class="mt-3 w-4/5 mx-auto block text-black rounded-lg px-3 py-2"
        placeholder="Количество"
      />
    </div>

    <h2 class="text-lg font-semibold px-4 mt-6">Или выберите комплект</h2>

    <div class="px-4 mt-3 grid gap-3">
      <PackageButton :value="50" />
      <PackageButton :value="100" />
      <PackageButton :value="200" />
    </div>

    <button class="text-gray-400 mt-3 px-4" @click="showMore = !showMore">
      Раскрыть все ⬇️
    </button>

    <div v-if="showMore" class="grid gap-3 px-4 mt-3">
      <PackageButton v-for="v in morePackages" :key="v" :value="v" />
    </div>

    <button
      class="btn-primary mt-10 mx-4"
      @click="next"
    >
      Продолжить
    </button>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import PackageButton from "@/components/PackageButton.vue";
import BackButton from "@/components/ui/BackButton.vue";

const amount = ref<number | null>(null);
const showMore = ref(false);

const morePackages = [300, 500, 700, 1000, 1500, 2000];

const rubles = computed(() =>
  amount.value ? Math.round(amount.value * 1.6) : 0
);

const next = () => {
  if (!amount.value) {
    alert("Введите сумму!");
    return;
  }
  localStorage.setItem("stars_amount", String(amount.value));
  window.location.href = "/buy/confirm";
};
</script>
