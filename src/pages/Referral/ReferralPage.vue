<template>
  <MainLayout>
    <div class="card flex justify-center">
        <Toast class="px-5" position="top-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-col items-start flex-auto px-5">
                    <div class="font-medium text-lg my-4">{{ slotProps.message.summary }}</div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="View" />
    </div>
    <!-- Верхняя панель -->
    <div class="text-2xl justify-between p-4 items-center shrink-0 bg-gray-900">
      <button
        class="w-full px-6 py-2 text-lg text-center
               text-white font-medium rounded-full flex items-center justify-center gap-2"
      >
        Реферальная программа
      </button>
    </div>

    <div class="flex flex-col px-4 pb-24 overflow-y-auto grow">
      <p class="text-gray-300 text-center">
        За каждого приглашенного пользователя начисляем 5⭐
      </p>

      <div class="text-lg font-bold mt-4">Ваша ссылка</div>
      <div
        class="bg-white px-4 py-2 rounded-xl mt-4 grid-cols-2 gap-2 items-center justify-center flex"
        @click="CopyInBuffer"
      >
        <p class="text-blue-700 text-base font-mono break-all mt-1 flex-1 truncate">{{ link }}</p>
        <div
          class="icon-mask w-5 h-5 bg-blue-700"
          style="mask-image: url('/icons/copy.svg'); -webkit-mask-image: url('/icons/copy.svg');"
        ></div>
      </div>
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
               bg-blue-600 text-white font-medium hover:bg-gray-700 mt-4"
      >
        Поделиться ссылкой
      </button>
      <div class="text-lg font-bold mt-4">Статистика</div>
      <div class="flex flex-col gap-3 mt-3">
        <div class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors bg-gray-700">
          <span class="text-white">Рефералов</span>
          <span class="text-white text-xl font-semibold">0</span>
        </div>
        <div class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors bg-gray-700">
          <span class="text-white">Активных рефералов</span>
          <span class="text-white text-xl font-semibold">0</span>
        </div>
        <div class="w-full grid grid-cols-[1fr_auto_auto] gap-2 px-4 py-3 rounded-xl
            items-center bg-gray-700 cursor-pointer transition-colors">
          <span class="text-white">Всего заработано</span>
          <div
            class="icon-mask w-6 h-6 bg-yellow-400"
            style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
          ></div>
          <span class="text-white text-xl font-semibold text-right">0</span>
        </div>
        <div class="w-full grid grid-cols-[1fr_auto_auto] gap-2 px-4 py-3 rounded-xl items-center bg-gray-700 cursor-pointer transition-colors">
          <span class="text-white">Баланс</span>
          <div
            class="icon-mask w-6 h-6 bg-yellow-400"
            style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
          ></div>
          <span class="text-white text-xl font-semibold text-right">0</span>
        </div>
      </div>
      <button
        class="w-full gap-2 px-4 py-3 rounded-xl flex items-center justify-center cursor-pointer transition-colors
               bg-slate-700 text-white font-medium hover:bg-gray-700 mt-4"
        @click="openWithdraw"
      >
        Вывести
      </button>
      <div class="text-lg font-bold mt-4">Правила</div>
      <div class="bg-gray-700 rounded-2xl px-4 py-3 mt-3">
        <div class="list-disc list-inside text-white text-base space-y-2">
          <p>Реферал - это новый пользователь, который зарегистрировался по вашей реферальной ссылке.</p>
          <p>Вознаграждение начисляется на ваш баланс после того, как реферал совершит свою первую покупку.</p>
          <p>Любые попытки мошенничества приведут к блокировке аккаунта и аннулированию реферальных бонусов.</p>
        </div>
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
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const link = "https://t.me/your_bot?start=ref123";
const toast = useToast();
const visible = ref(false);
const visibleBottom = ref(false);
const amount = ref<number | null>(null);
const errorMessage = ref<string | null>(null);

function CopyInBuffer() {
  showTemplate();
  navigator.clipboard.writeText(link);
}
const showTemplate = () => {
    if (!visible.value) {
        toast.add({ severity: 'info', summary: 'Скопировано в буфер обмена', group: 'bc', life: 1000 });
        visible.value = true;
    }
};
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
