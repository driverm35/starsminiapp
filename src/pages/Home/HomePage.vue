<template>
  <MainLayout>
    <div>
      <div class="flex text-2xl justify-between p-4 relative z-10">
        <IconButton icon="⚙️" />
        <button class="px-6 py-2 text-xl bg-white text-black rounded-full flex items-center gap-2">
          ⭐ Купить
        </button>
        <IconButton icon="❓" />
      </div>
    </div>

    <BannerSlider />

    <div class="mt-10 fixed bottom-30 flex-col left-0 right-0 flex justify-center gap-3 px-4">
      <button class="text-xl p-5 bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full" @click="$router.push('/buy/self')">
        🎁 Подарить звезды
      </button>
      <button class="text-xl p-5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" @click="$router.push('/buy/self')">
        ⭐ Купить для себя
      </button>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import BannerSlider from "@/components/BannerSlider.vue";
import IconButton from "@/components/ui/IconButton.vue";
</script>
