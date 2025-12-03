export const basePackages = [
  { value: 50, price: 80 },
  { value: 100, price: 160 },
  { value: 200, price: 320 }
];

export const morePackages = [
  { value: 300, price: 480 },
  { value: 500, price: 800 },
  { value: 700, price: 1120 },
  { value: 1000, price: 1600 },
  { value: 1500, price: 2400 },
  { value: 2000, price: 3200 }
];

export function getPrice(value: number) {
  return Math.round(value * 1.6);
}
