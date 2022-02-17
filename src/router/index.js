import { createWebHistory, createRouter } from "vue-router";
import PaymentSuccess from "../components/PaymentSuccess.vue";
const Home = import("@/views/Home.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "Reservation",
    },
  },
  {
    path: "/reservation",
    name: "ReservationSuccess",
    component: PaymentSuccess,
    meta: {
      layout: "PaymentSuccess",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
