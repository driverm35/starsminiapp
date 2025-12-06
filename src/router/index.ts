import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/Home/HomePage.vue";
import BuySelfPage from "@/pages/Buy/BuySelfPage.vue";
import ConfirmOrderPage from "@/pages/Buy/ConfirmOrderPage.vue";
import PurchasesPage from "@/pages/Purchases/PurchasesPage.vue";
import ReferralPage from "@/pages/Referral/ReferralPage.vue";
import ProfilePage from "@/pages/Profile/ProfilePage.vue";
import ReviewsRedirect from "@/pages/Reviews/ReviewsRedirect.vue";
import BattlePage from "@/pages/Battle/BattlePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/battle", component: BattlePage },
  { path: "/buy/self", component: BuySelfPage },
  { path: "/buy/confirm", component: ConfirmOrderPage },
  { path: "/purchases", component: PurchasesPage },
  { path: "/referral", component: ReferralPage },
  { path: "/profile", component: ProfilePage },
  { path: "/reviews", component: ReviewsRedirect },
];

export default createRouter({
  history: createWebHistory(),
  routes
});
