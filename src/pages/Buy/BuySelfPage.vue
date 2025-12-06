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
        Купить для себя
      </button>
      <div class="col-span-1 col-end-7"></div>
    </div>

    <!-- Основной контент с отступом под navbar -->
    <div class="flex flex-col px-4 pb-24 overflow-y-auto grow">

      <!-- Поле ввода -->
      <h1 class="text-xl font-bold mt-4">Укажите количество звезд</h1>

      <div class="mt-3">
        <div
          :class="[
            'flex gap-2 px-4 py-2 rounded-xl items-center transition-colors',
            errorMessage ? 'bg-gray-900 border-2 border-red-500' : 'bg-gray-800'
          ]"
        >
          <div
            class="icon-mask w-6 h-6 bg-yellow-400"
            style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
          ></div>

          <input
            v-model.number="amount"
            @input="onInput"
            type="number"
            min="50"
            max="9000"
            class="grow text-lg text-white bg-transparent py-2 focus:outline-none"
            placeholder="Введите от 50 до 9000"
          />

          <span class="font-semibold text-lg">{{ rubles }} ₽</span>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-base mt-3">{{ errorMessage }}</div>
      </div>

      <!-- Список комплектов -->
      <h2 class="text-xl font-semibold mt-6">Или выберите комплект</h2>

      <div class="flex flex-col mt-3 space-y-3">
        <PackageButton :value="50" :selected="amount === 50" @select="selectPackage" />
        <PackageButton :value="100" :selected="amount === 100" @select="selectPackage" />
        <PackageButton :value="200" :selected="amount === 200" @select="selectPackage" />

        <template v-if="showMore">
          <PackageButton
            v-for="v in morePackages"
            :key="v"
            :value="v"
            :selected="amount === v"
            @select="selectPackage"
          />
        </template>

        <button
          v-if="!showMore"
          class="w-full bg-gray-800 px-4 py-3 rounded-xl flex gap-2
                 items-center justify-center text-lg font-medium"
          @click="showMore = true"
        >
          Показать ещё
        </button>



        <button
          class="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white py-3
                 rounded-xl text-lg font-medium flex items-center justify-center gap-2"
          @click="next"
        >
          Продолжить
        </button>
      </div>
    </div>
  </MainLayout>
</template>


<script setup lang="ts">
import { ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import PackageButton from "@/components/PackageButton.vue";
import BackButton from "@/components/ui/BackButton.vue";

const amount = ref<number | null>(null);
const showMore = ref(false);
const errorMessage = ref<string | null>(null);

function selectPackage(v: number) {
  amount.value = v;
  errorMessage.value = null;
}

const morePackages = [300, 400, 500, 1000, 5000, 9000];

const rubles = computed(() =>
  amount.value ? Math.round(amount.value * 1.6) : 0
);

function validateAmount(): boolean {
  const v = amount.value;
  if (v === null || v === undefined || Number.isNaN(v)) {
    errorMessage.value = null; // don't show error while typing empty
    return false;
  }
  if (v < 50) {
    errorMessage.value = 'Минимум 50';
    return false;
  }
  if (v > 9000) {
    errorMessage.value = 'Максимум 9000';
    return false;
  }
  errorMessage.value = null;
  return true;
}

const next = () => {
  // require a valid amount within limits
  if (!validateAmount()) {
    if (!amount.value) errorMessage.value = 'Введите сумму';
    return;
  }
  localStorage.setItem('stars_amount', String(amount.value));
  window.location.href = '/buy/confirm';
};

function onInput() {
  // validate as user types (show limits only when out of range)
  validateAmount();
}
</script>

<style scoped>
/* Ничего не трогаем здесь — Tailwind всё делает */
</style>