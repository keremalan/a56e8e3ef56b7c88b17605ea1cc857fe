<template>
  <div class="roomType-Scenic">
    <div class="roomType">
      <h2 class="roomType-headline2">Oda Tipi</h2>
      <div class="roomType-row">
        <div class="room-types" v-for="item in hotelsDetails" :key="item.id">
        <RoomTypeCard
          :roomImage="item.room_type[0].photo"
          :roomTypeTitle="item.room_type[0].title"
          :roomTypePrice="item.room_type[0].price + '$'"
          checkoutDetailDate="5"
          :checkoutDetailAdultPerson="item.max_adult_size[1]"
          checkoutDetailChildPerson="2"
        />
      </div>
      </div>
    </div>
    <div class="roomScenic">
      <h2 class="roomScenic-headline2">Oda Manzarasi</h2>
      <div class="roomScenic-row">
              <div class="room-scenics" v-for="item in hotelsDetails" :key="item.id">
        <RoomScenicCard
          :roomScenicImage="item.room_scenic[0].photo"
          :roomScenicTitle="item.room_scenic[0].title"
          :roomScenicPriceEffect=" '%' + item.room_scenic[0].price_rate"
        />
      </div>
      </div>
    </div>
    <div class="nav">
      <ForwardBackButton type="back" />
      <ForwardBackButton type="forward" />
    </div>
  </div>
</template>
<script>
import RoomTypeCard from "./RoomTypeCard.vue";
import RoomScenicCard from "./RoomScenicCard.vue";
import { computed } from 'vue';
import ForwardBackButton from "@/components/ForwardBackButton.vue";
import { defineComponent, getCurrentInstance } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PiThirdStep",
  components: {
    RoomTypeCard,
    RoomScenicCard,
    ForwardBackButton,
  },
  setup(props) {
    const store = useStore();
    const app = getCurrentInstance();

    const setStep = (activeStep) => {
      if (activeStep === 3) {
        return;
      }
      store.commit("setStep", activeStep + 1);
    };
    const hotels = computed(() => store.getters._hotels);
    const activeStep = computed(() => store.getters._activeStep);
    const hotelsDetails = computed(() => store.getters._getHotelsDetails);
    
    const singleHotelWithDetail = computed(() =>
      hotelsDetails.value.filter((a) => a.hotel_id == props.hotelId)
    );
    const selectedHotelReactive = computed(() => app.data.selectedHotel);

    return { hotels, hotelsDetails, singleHotelWithDetail,  setStep, activeStep, selectedHotelReactive };
  },
});
</script>
