<template>
  <MainLayout>
    <!-- Верхняя панель -->
    <div class="grid grid-cols-7 gap-3 text-2xl justify-between px-4 py-5 items-center shrink-0 bg-gray-900">
      <div
        class="col-span-1 flex justify-center bg-gray-800/90 rounded-full size-11 items-center"
        @click="$router.push('/buy/self')"
      >
        <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
      </div>
      <button
        class="col-span-5 col-start-2 w-full py-2 text-base text-center bg-linear-to-r from-cyan-500 to-blue-500
               text-white font-normal rounded-full flex items-center justify-center gap-2"
      >
      <div
          class="icon-mask w-6 h-6 bg-yellow-400"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
        Получить бесплатно
      </button>
      <div
        class="col-span-1 flex justify-center bg-gray-800/90 rounded-full size-11 items-center"
        @click="$router.push('/battle')"
      >
        <div
          class="icon-mask w-6 h-6 bg-white"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
      </div>

    </div>

    <BannerSlider />

    <div class="relative px-4 flex flex-col justify-center gap-4 pb-30">
      <button
        class="text-xl font-medium p-4 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full"
        @click="$router.push('/buy/gift')"
      >
        🎁 Подарить звезды
      </button>

      <button
        class="text-xl font-medium p-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center gap-2"
        @click="$router.push('/buy/self')"
      >
        <div
          class="icon-mask w-6 h-6 bg-yellow-400"
          style="mask-image: url('/icons/star.svg'); -webkit-mask-image: url('/icons/star.svg');"
        ></div>
        Купить для себя
      </button>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import BannerSlider from "@/components/BannerSlider.vue";
</script>
