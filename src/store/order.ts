import { ref, computed } from "vue";

export function useOrderStore() {
  const amount = ref<number>(0);      // количество звезд
  const method = ref<string>("sbp");  // sbp | ton

  const totalRub = computed(() =>
    Math.round(amount.value * 1.6)
  );

  function setAmount(v: number) {
    amount.value = v;
    localStorage.setItem("stars_amount", String(v));
  }

  function load() {
    const saved = Number(localStorage.getItem("stars_amount") || 0);
    amount.value = saved;
  }

  return {
    amount,
    method,
    totalRub,
    setAmount,
    load
  };
}
