<template>
  <button
    class="w-11 h-11 bg-white/80 rounded-xl flex items-center justify-center"
    @click="$router.back()"
  >
  <div
    class="icon-mask w-6 h-7 bg-black/80"
    style="mask-image: url('/icons/left-arrow.svg'); -webkit-mask-image: url('/icons/left-arrow.svg');"
  ></div>
  </button>
</template>
