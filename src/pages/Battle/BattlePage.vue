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
        Ежедневный PVP баттл
      </button>
      <div class="col-span-1 col-end-7">i</div>
    </div>

    <!-- Основной контент с отступом под navbar -->
    <div class="flex flex-col px-4 pb-24 overflow-y-auto grow">
        <!-- Таймер -->
        <div class="flex-col bg-linear-to-tr from-purple-700 to-pink-600 px-4 py-3 rounded-xl mt-4 flex items-center justify-between">
          <div class="text-white text-sm font-medium text-center">Выбераем победителя через:</div>
          <div class="text-white text-4xl font-bold">12:34:56</div>
        </div>
        <div class="mt-4 text-center text-2xl font-bold">
          <p>Покупай звёзды и выигрывай<br /> <span class="text-yellow-500">до 300 звёзд каждые 24 часа</span></p>
          <p class="mt-3 text-base font-normal">Общий призовой фонд 600 звёзд. Чем больше покупок, тем выше ваши шансы на победу.</p>
        </div>
        <button
           class="mt-4 text-xl font-medium p-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center gap-2"
           @click="$router.push('/buy/self')"
        >
           <div
             class="icon-mask w-6 h-6 bg-yellow-400"
             style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
           ></div>
           Купить звёзды
        </button>

        <!-- позиция в рейтинге -->
        <h2 class="text-xl font-semibold mt-6">Ваша позиция в рейтинге</h2>
        <div class="flex flex-row mt-3 space-x-3">
          <div class="bg-gray-700 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
              <p>Место</p>
              <p class="text-xl font-bold">12</p>
          </div>
          <div class="bg-gray-700 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
              <p>Купили</p>
              <p class="text-xl font-bold">12</p>
          </div>
          <div class="bg-gray-700 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
              <p>До 1 места</p>
              <p class="text-xl font-bold">12</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm mb-2">Прогресс к 1 месту</p>
          <ProgressBar :value="progressValue"></ProgressBar>
          <p class="text-sm mt-2">До призовой зоны (топ 3) осталось купить: @calcTop3</p>
        </div>

        <!-- Призы дня -->
        <div class="text-center mt-6">
            <h2 class="text-2xl font-semibold mb-3">3 победителя делят 600 звёзд</h2>
            <p class="text-sm">Призы начисляются автоматически сразу после завершения таймера. Вывод доступен в любое время с баланса аккаунта</p>
        </div>
        <!-- Призовые места -->
        <div class="flex flex-row mt-3 space-x-3">
            <div class="bg-orange-600 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
                <p>1 место</p>
                <div class="flex flex-row justify-center items-center gap-1">
                    <div
                      class="icon-mask w-6 h-6 bg-yellow-400"
                      style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
                    ></div>
                    <p class="text-xl font-bold">300</p>
                </div>
            </div>
            <div class="bg-gray-700 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
                <p>2 место</p>
                <div class="flex flex-row justify-center items-center gap-1">
                    <div
                      class="icon-mask w-6 h-6 bg-yellow-400"
                      style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
                    ></div>
                    <p class="text-xl font-bold">200</p>
                </div>
            </div>
            <div class="bg-gray-700 rounded-2xl px-4 py-3 flex flex-col items-center justify-center w-1/3">
                <p>3 место</p>
                <div class="flex flex-row justify-center items-center gap-1">
                    <div
                      class="icon-mask w-6 h-6 bg-yellow-400"
                      style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
                    ></div>
                    <p class="text-xl font-bold">100</p>
                </div>
            </div>
        </div>
        <!-- Призовые места -->
        <h2 class="text-2xl font-semibold my-6">Лидерборд дня</h2>
        <LeaderCard
          v-for="user in leaders"
          :key="user.place"
          :place="user.place"
          :name="user.isMe ? 'Вы' : user.name"
          :stars="user.stars"
          :prize="user.prize"
          :highlight="user.place <= 3"
          class="mb-2"
        />


    </div>
  </MainLayout>
</template>


<script setup lang="ts">
import { ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import LeaderCard from "@/components/LeaderCard.vue";
import BackButton from "@/components/ui/BackButton.vue";
import ProgressBar from 'primevue/progressbar';

interface LeaderRow {
  name: string;
  stars: number;
  place: number;
  prize: number | string;
  highlight: boolean;
  isMe?: boolean;
}

const progressValue = ref(40);
const rawLeaders = ref<{ name: string; stars: number; isMe?: boolean }[]>([
  { name: "Иван", stars: 900 },
  { name: "Артём", stars: 850 },
  { name: "Анна", stars: 820 },
  { name: "Катя", stars: 800 },
  { name: "Сергей", stars: 750 },
  { name: "Дима", stars: 700 },
  { name: "Олег", stars: 650 },
  { name: "Юля", stars: 620 },
  { name: "Рома", stars: 600 },
  { name: "Таня", stars: 550 }
]);

const myStars = ref(120);

const prizeForPlace = (place: number) => {
  if (place === 1) return 300;
  if (place === 2) return 200;
  if (place === 3) return 100;
  return "-";
};

const leaders = computed<LeaderRow[]>(() => {
  const sorted = [...rawLeaders.value, { name: "Вы", stars: myStars.value, isMe: true }]
    .sort((a, b) => b.stars - a.stars);

  const myPlace = sorted.findIndex(u => u.isMe) + 1;

  // первые 10
  let top = sorted.slice(0, 10);

  // если я не в топе — добавляем свою строку
  if (myPlace > 10) {
    top.push(sorted.find(u => u.isMe)!);
  }

  // назначаем призы и цвета фона
  return top.map((item, i) => ({
    ...item,
    place: i + 1,
    prize: prizeForPlace(i + 1),
    highlight: i < 3,
    isMe: item.isMe ?? false
  }));
});
</script>

<style scoped>
/* Ничего не трогаем здесь — Tailwind всё делает */
</style>