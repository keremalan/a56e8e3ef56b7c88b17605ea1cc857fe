<template>
  <div id="pi-first">
    <div class="pi-first-hotel">Otel: {{ state.selectedHotel }}</div>
    <select v-model="state.selectedHotel" class="pi-first-select" @change="selectedItem">
      <option value="" disabled :selected="true">Bir otel seciniz</option>
      <option v-for="item in hotels" :key="item.id">
        {{ item.hotel_name }}
      </option>
    </select>
    <span></span>
    <Spacer />
    <hr class="pi-first-hr" />
    <h2 class="pi-headline2">Oteller</h2>
    <HotelCard
      v-for="item in hotels"
      :key="item.name"
      :hotelName="item.hotel_name"
      :hotelId="item.id"
    />
    <button @click="submitForm">Submit</button>
    <ForwardBackButton type="forward"/>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { defineComponent, getCurrentInstance } from "vue";
import Spacer from "./Spacer.vue";
import HotelCard from "./HotelCard.vue";
import { useStore } from "vuex";
import ForwardBackButton from "./ForwardBackButton.vue";

export default defineComponent({
  data () {
    return {
      selectedHotel: '',
    };
  },

  mounted() {
    if (localStorage.selectedHotel) {
      this.selectedHotel = localStorage.selectedHotel;
    }
  },
  watch: {
    selectedHotel(newSelectedHotel) {
      localStorage.setItem('selectedHotel', newSelectedHotel);
      localStorage.selectedHotel = newSelectedHotel;
    },
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form gonderildi')
      } else {
        alert('Bir otel secmelisiniz.')
      }
    },
    selectedItem(selectedHotel) {
      localStorage.setItem('selectedHotel', selectedHotel.target.value);
    },
  },
  name: "PiFirstStep",
  components: {
    Spacer,
    HotelCard,
    ForwardBackButton,
  },
  setup() {
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
    const selectedHotelReactive = computed(() => app.data.selectedHotel);

    const state = reactive ({
      selectedHotel: '',
    })
    
    const rules = computed(() => {
      return {
        selectedHotel: { required },
      }
    })

    const v$ = useVuelidate(rules, state)

    return { hotels, setStep, activeStep, selectedHotelReactive, v$, state };
  },
});
</script>
