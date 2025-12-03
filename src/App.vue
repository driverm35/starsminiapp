<template>
  <div class="text-2xl p-6">
    Hello, {{ user?.first_name }}!
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const user = ref<any>(null);
const theme = ref<any>(null);

onMounted(() => {
    window.Telegram?.WebApp?.ready();
    user.value = window.Telegram?.WebApp?.initDataUnsafe?.user;
    theme.value = window.Telegram?.WebApp?.themeParams;
});
</script>
