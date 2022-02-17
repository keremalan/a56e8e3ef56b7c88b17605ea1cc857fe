import { createApp } from "vue";
import App from "@/App.vue";
import { store } from "@/store";
import router from "@/router";
import Bookings from "@/services/booking";
import Coupons from "@/services/coupon";
import Hotels from "@/services/hotel";
import Reservation from "@/layout/Reservation.vue";
const app = createApp(App);

app.config.globalProperties.booking = Bookings;
app.config.globalProperties.coupons = Coupons;
app.config.globalProperties.hotels = Hotels;

app.use(store).use(router).component("Reservation", Reservation).mount("#app");
