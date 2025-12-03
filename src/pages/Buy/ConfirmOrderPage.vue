<template>
  <MainLayout>
    <BackButton />

    <h1 class="text-xl font-bold px-4 mt-3">Вы покупаете</h1>

    <div class="px-4 mt-3 text-center">
      <div class="text-5xl mb-2">⭐</div>
      <div class="text-2xl font-bold">{{ amount }} звезд</div>
    </div>

    <h2 class="text-xl font-semibold px-4 mt-6">Получатель</h2>

    <div class="px-4 mt-3 flex items-center gap-3">
      <img :src="photo" class="w-14 h-14 rounded-full" />
      <div>{{ fullname }}</div>
    </div>

    <Separator class="my-6" />

    <h2 class="text-xl font-semibold px-4">Выберите способ оплаты</h2>

    <div class="px-4 mt-4 grid gap-3">
      <PaymentMethodCard name="СБП" value="sbp" v-model="method" />
      <PaymentMethodCard name="TON" value="ton" v-model="method" />
    </div>

    <button
      class="btn-primary mx-4 mt-10"
      @click="pay"
    >
      Оплатить {{ totalRub }} ₽
    </button>

    <p class="text-gray-500 text-xs text-center mt-3 px-4">
      Нажимая оплатить вы соглашаетесь с условиями сервиса
    </p>
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
