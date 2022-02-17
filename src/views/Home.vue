<template>
  <PI-FirstStep v-if="activeStep === 0" />
  <PiSecondStep v-if="activeStep === 1" />
  <PiThirdStep v-if="activeStep === 2" />
  <PiLastStep v-if="activeStep === 3" />
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, getCurrentInstance, computed } from "vue";
import PIFirstStep from "@/components/PI-FirstStep.vue";
import PiSecondStep from "@/components/PiSecondStep.vue";

import PiThirdStep from "@/components/PiThirdStep.vue";
import PiLastStep from "@/components/PiLastStep.vue";

export default defineComponent({
  name: "Home",
  components: { PIFirstStep, PiSecondStep, PiThirdStep, PiLastStep },
  setup() {
    const store = useStore();
    const app = getCurrentInstance();
    const hotels = app.appContext.config.globalProperties.hotels;

    const fetchData = () => {
      hotels.fetchAll().then((res) => {
        store.commit("setHotels", res.data);
      });
      hotels.fetchAllWithDetails().then((res) => {
        store.commit("setHotelsDetails", res.data);
      });
    };
    fetchData();
    const activeStep = computed(() => store.getters._activeStep);

    return { activeStep };
  },
});
</script>
