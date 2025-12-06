<template>
  <div
    :class="[
      'w-full px-4 py-3 rounded-xl grid grid-cols-[auto_auto_auto_1fr_auto_auto] items-center gap-4',
      highlight ? 'bg-orange-500 text-black' : 'bg-gray-700 text-white'
    ]"
  >
    <span>{{ place }}</span>

    <span>{{ name }}</span>

    <div
      class="icon-mask w-5 h-5 bg-yellow-400"
      style="mask-image: url('/icons/star.svg')"
    ></div>

    <span class="truncate">{{ stars }}</span>
    <span class="text-right font-semibold">{{ prize }}</span>
    <div
      class="icon-mask w-5 h-5 bg-yellow-400"
      style="mask-image: url('/icons/star.svg')"
    ></div>
  </div>
</template>



<script setup lang="ts">

const props = defineProps<{
  place: number;
  name: string;
  stars: number;
  prize: number | string;
  highlight?: boolean;
}>();
</script>

