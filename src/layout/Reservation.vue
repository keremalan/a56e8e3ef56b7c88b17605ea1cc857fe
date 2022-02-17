<template>
  <Header />
  <Banner />
  <Status />
  <P-Indicator :stepCount="activeStep" />
  <slot />
</template>

<script>
import { defineComponent, computed } from "vue";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Status from "@/components/Status.vue";
import PIndicator from "@/components/P-Indicator.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Reservation",

  components: { Header, Banner, Status, PIndicator },
  setup() {
    const store = useStore();

    const activeStep = computed(() => store.getters._activeStep);

    return { activeStep };
  },
});
</script>
