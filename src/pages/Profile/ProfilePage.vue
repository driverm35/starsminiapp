<template>
  <MainLayout>
    <div class="flex flex-col px-4 pb-24 mt-5 overflow-y-auto grow">
      <div class="px-4 mt-3 flex items-center gap-3">
        <Avatar :image="photo" class="mr-1" size="xlarge" shape="circle" />
        <div>{{ fullname }}</div>
      </div>
      <Separator class="my-4" />
      <div class="flex bg-gray-500 rounded-xl p-4 mt-3 justify-center items-center text-start ">
        <div class="grow text-lg font-semibold">Баланс: <span class="text-yellow-400">0</span></div>
        <div
        class="w-fit flex-none px-4 py-2 rounded-full items-center justify-center cursor-pointer transition-colors
               bg-blue-600 text-white font-medium hover:bg-gray-700"
        @click="openWithdraw"
      >
        Вывести
      </div>
      </div>
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
               bg-blue-600 text-white font-medium hover:bg-gray-700 mt-4"
      >
      <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
        Получить бесплатно
      </button>
      <Separator class="my-2" />
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
               bg-linear-to-r from-gray-800 to-gray-600 text-white font-medium hover:bg-gray-700 mt-4"
        @click="$router.push('/purchases')"
      >
        <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/history.svg'); -webkit-mask-image: url('/icons/history.svg');"
        ></div>
        История покупок
      </button>
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
           bg-linear-to-r from-gray-800 to-gray-600 text-white font-medium hover:bg-gray-700 mt-4"
        @click="openSupport"
      >
        <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/message.svg'); -webkit-mask-image: url('/icons/message.svg');"
        ></div>
        Написать в поддержку
      </button>
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
           bg-linear-to-r from-gray-800 to-gray-600 text-white font-medium hover:bg-gray-700 mt-4"
        @click="openReferal"
      >
        <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/users.svg'); -webkit-mask-image: url('/icons/users.svg');"
        ></div>
        Реферальная программа
      </button>
      <div class="text-white text-sm text-center mt-10 space-y-2">
        <a href="/policy">Пользовательское соглашение</a><br />
        <a href="/policy">Политика конфиденциальности</a>
      </div>
    </div>
    <Drawer v-model:visible="visibleBottom" header="Вывести" position="bottom" style="height: auto">
      <div>
        <p class="text-base text-white/70">Укажите количество звёзд</p>
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
            placeholder="Введите от 100 до 9000"
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-base mt-3">{{ errorMessage }}</div>
      </div>
        <button
          class="w-full bg-blue-500 text-white py-3 mt-6 rounded-full text-lg font-medium"
          @click="next"
        >
          Вывести
        </button>
      </div>
    </Drawer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const visibleBottom = ref(false);
const amount = ref<number | null>(null);
const errorMessage = ref<string | null>(null);
// данные Telegram
const photo = "/images/banner.png"; // подставишь WebApp.initData.user.photo_url
const fullname = "Ваше имя";        // подставишь user.first_name + last_name

function openSupport() {
  router.push('https://t.me/support');
}
function openReferal() {
  router.push("/referral");
}
function openWithdraw() {
  visibleBottom.value = true;
}
function onInput() {
  // validate as user types (show limits only when out of range)
  validateAmount();
}
function validateAmount(): boolean {
  const v = amount.value;
  if (v === null || v === undefined || Number.isNaN(v)) {
    errorMessage.value = null; // don't show error while typing empty
    return false;
  }
  if (v < 100) {
    errorMessage.value = 'Минимум 100';
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
  localStorage.setItem('stars_amount_withdraw', String(amount.value));
  window.location.href = '/withdraw/create';
};
</script>
