<template>
  <MainLayout>
    <!-- Верхняя панель -->
    <div class="grid grid-cols-6 gap-2 text-2xl justify-between p-4 items-center shrink-0 bg-gray-900">
      <div class="col-start-1 col-end-2 flex items-center">
        <BackButton />
      </div>
      <button
        class="col-span-4 col-start-2 w-full px-6 py-2 text-base text-center
               text-white font-medium rounded-full flex items-center justify-center gap-2"
      >
        Подтверждение заказа
      </button>
      <div class="col-span-1 col-end-7"></div>
    </div>

    <div class="flex flex-col pb-24 overflow-y-auto grow">
      <h1 class="text-lg font-bold px-4 mt-3">Вы покупаете</h1>

      <div class="px-4 mt-3 text-start flex items-center gap-3">
        <div
          class="icon-mask w-10 h-10 bg-yellow-400"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
        <div class="text-5xl font-semibold">{{ amount }}</div>
      </div>

      <h2 class="text-lg font-semibold px-4 mt-6">Получатель</h2>

      <div class="px-4 mt-3 flex items-center gap-3">
        <img :src="photo" class="w-10 h-10 rounded-full" />
        <div>{{ fullname }}</div>
      </div>

      <Separator class="my-5" />

      <h2 class="text-lg font-semibold px-4">Выберите способ оплаты</h2>

      <div class="px-4 mt-4 grid gap-3">
        <PaymentMethodCard name="Система быстрых платежей" value="sbp" icon="sbp" v-model="method" />
        <PaymentMethodCard name="Банковская карта РФ" value="card" icon="mir,visa,mastercard" v-model="method" />
        <PaymentMethodCard name="TON" value="ton" icon="ton" v-model="method" />
      </div>

      <button
        class="btn-primary mx-4 mt-4 bg-linear-to-r from-cyan-500 to-blue-500 text-xl font-medium py-4 rounded-full"
        @click="pay"
      >
        Оплатить {{ totalRub }}₽
      </button>

      <p class="text-white text-xs text-center mt-3 px-4">
        Нажимая "Оплатить", вы соглашаетесь с <a href="/terms" class="underline">условиями сервиса</a>
      </p>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import BackButton from "@/components/ui/BackButton.vue";
import PaymentMethodCard from "@/components/PaymentMethodCard.vue";
import Separator from "@/components/ui/Separator.vue";

const amount = Number(localStorage.getItem("stars_amount") || 0);
const method = ref("sbp");

// данные Telegram
const photo = "/images/avatar.jpg"; // подставишь WebApp.initData.user.photo_url
const fullname = "Ваше имя";        // подставишь user.first_name + last_name

const totalRub = computed(() => Math.round(amount * 1.6));

const pay = async () => {
  const res = await fetch("/api/pay", {
    method: "POST",
    body: JSON.stringify({
      amount,
      method: method.value,
    }),
  });
  const data = await res.json();
  window.location.href = data.payment_url;
};
</script>
