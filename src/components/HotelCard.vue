<template>
  <div class="hotel-card">
    <div class="hotel-card-top-left">
      <img :src="HotelImg" />
    </div>
    <div class="hotel-card-top-right">
      <h3>{{ hotelName }}</h3>
      <h4>Sunulan Hizmetler</h4>
      <div
        v-if="singleHotelWithDetail[0]"
        class="hotel-card-top-right-services"
      >
        <HotelServices
          v-for="(item, index) in singleHotelWithDetail[0].possibilities"
          :key="item + 'services'"
          :serviceName="item"
          :class="index === 0 && 'first'"
        />
      </div>
    </div>
  </div>
  <div class="spacer"></div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import HotelImg from "@/assets/hotel-image.png";
import HotelServices from "./HotelServices.vue";
export default defineComponent({
  props: ["hotelId", "hotelName"],
  name: "HotelCard",
  setup(props) {
    const store = useStore();
    const hotelsWithDetails = computed(() => store.getters._getHotelsDetails);

    const singleHotelWithDetail = computed(() =>
      hotelsWithDetails.value.filter((a) => a.hotel_id == props.hotelId)
    );
    return {
      HotelImg,
      hotelsWithDetails,
      singleHotelWithDetail,
    };
  },
  components: {
    HotelServices
  },
});
</script>
