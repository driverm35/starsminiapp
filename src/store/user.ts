import { ref } from "vue";

export function useUserStore() {
  const id = ref<number | null>(null);
  const username = ref<string>("");
  const fullName = ref<string>("");
  const photoUrl = ref<string>("");

  function initFromTelegram() {
    const tg = (window as any).Telegram?.WebApp;

    if (!tg || !tg.initDataUnsafe?.user) return;

    const u = tg.initDataUnsafe.user;

    id.value = u.id;
    username.value = u.username || "";
    fullName.value = `${u.first_name || ""} ${u.last_name || ""}`.trim();
    photoUrl.value = u.photo_url || "";
  }

  return {
    id,
    username,
    fullName,
    photoUrl,
    initFromTelegram
  };
}
