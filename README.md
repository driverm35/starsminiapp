# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


Структура проекта

my-tg-stars-shop/
├─ public/
│  ├─ icons/              # svg/png иконки
│  ├─ images/             # фоновые изображения, баннеры
│  └─ favicon.svg
│
├─ src/
│  ├─ App.vue
│  ├─ main.ts
│  ├─ env.d.ts
│  │
│  ├─ assets/
│  │   ├─ styles/
│  │   │   ├─ index.css        # tailwind base + custom
│  │   │   └─ variables.css
│  │   └─ images/
│  │
│  ├─ components/
│  │   ├─ ui/                  # универсальные UI-компоненты
│  │   │   ├─ BaseButton.vue
│  │   │   ├─ IconButton.vue
│  │   │   ├─ BackButton.vue
│  │   │   ├─ InputField.vue
│  │   │   └─ Separator.vue
│  │   │
│  │   ├─ Navbar.vue           # нижний навбар
│  │   ├─ BannerSlider.vue     # слайдер баннеров
│  │   ├─ PackageButton.vue    # кнопка для комплектов звезд
│  │   └─ PaymentMethodCard.vue
│  │
│  ├─ layouts/
│  │   └─ MainLayout.vue       # общий layout с navbar
│  │
│  ├─ pages/
│  │   ├─ Home/                # страница «Купить / Главная»
│  │   │   └─ HomePage.vue
│  │   │
│  │   ├─ Buy/
│  │   │   ├─ BuySelfPage.vue          # Купить для себя
│  │   │   ├─ ConfirmOrderPage.vue     # Подтверждение заказа
│  │   │   └─ SuccessPage.vue          # успешная оплата (опционально)
│  │   │
│  │   ├─ Purchases/
│  │   │   └─ PurchasesPage.vue        # История покупок
│  │   │
│  │   ├─ Referral/
│  │   │   └─ ReferralPage.vue         # Заработать
│  │   │
│  │   ├─ Menu/
│  │   │   └─ MenuPage.vue             # Личный кабинет
│  │   │
│  │   └─ Reviews/
│  │       └─ ReviewsRedirect.vue      # переход по ссылке в группу
│  │
│  ├─ router/
│  │   └─ index.ts
│  │
│  ├─ store/
│  │   ├─ user.ts
│  │   ├─ order.ts
│  │   └─ packages.ts
│  │
│  ├─ services/
│  │   ├─ api.ts              # запросы к backend
│  │   └─ telegram.ts         # работа с Telegram WebApp
│  │
│  └─ utils/
│      ├─ formatter.ts        # форматирование ₽, дат
│      └─ validators.ts
│
├─ index.html
├─ tailwind.config.js
├─ tsconfig.json
├─ package.json
└─ vite.config.ts
