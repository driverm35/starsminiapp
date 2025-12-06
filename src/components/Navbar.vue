<template>
  <nav class="fixed h-20 bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 flex justify-around py-4 :md max-w-180 mx-auto">
    <router-link to="/" class="nav-item" :class="{ active: isActive('/') }">
      <img src="/icons/shopping-bag.svg" alt="Купить" class="icon" />
      <div>Купить</div>
    </router-link>
    <router-link to="/reviews" class="nav-item" :class="{ active: isActive('/reviews') }">
      <img src="/icons/star.svg" alt="Отзывы" class="icon" />
      <div>Отзывы</div>
    </router-link>
    <router-link to="/referral" class="nav-item" :class="{ active: isActive('/referral') }">
      <img src="/icons/users.svg" alt="Заработать" class="icon" />
      <div>Заработать</div>
    </router-link>
    <router-link to="/profile" class="nav-item" :class="{ active: isActive('/profile') }">
      <img src="/icons/user.svg" alt="Профиль" class="icon" />
      <div>Профиль</div>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};
</script>

<style scoped>
.nav-item {
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-item:hover {
  color: #ccc;
}
.icon {
  width: 24px;
  height: 24px;
  margin-bottom: 0.5rem;
  filter: invert(0.5);
}
.nav-item.active .icon {
  filter: invert(1);
}
.active {
  color: white;
  font-weight: 600;
}
</style>
