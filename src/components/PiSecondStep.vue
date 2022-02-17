<template>
  <div class="pi-second">
    <h2 class="pi-second-headline2">Tarih ve Kisi Secimi</h2>
    <span class="pi-second-span"
      >Otele giris ve cikis tarihlerinizle birlikte, ziyaretinize kac kisinin
      katilacagini seciniz.</span
    >
    <div class="pi-second-inputs">
      <div class="dates">
        <div class="dates-startDate">
          <h3>Giris Tarihi</h3>
          <input class="inpt-date" type="date" v-model="state.startDate" @change="selectedItem" />
          <!-- <button class="btn-pi-second">Duzenle</button> -->
        </div>
        <div class="dates-endDate">
          <h3>Cikis Tarihi</h3>
          <input class="inpt-date" type="date" v-model="state.endDate" @change="selectedItem2" />
          <!-- <button class="btn-pi-second">Duzenle</button> -->
        </div>
      </div>
      <div class="person">
        <div class="person-adult">
          <h3>Yetiskin Sayisi</h3>
          <select v-model="state.personAdult" @change="selectedItem3">
            <option disabled value="" :selected="true">Yetiskin seciminizi yapin</option>
            <option v-for="index in 20" :key="index">{{ index + " yetişkin" }}</option>
          </select>
        </div>
        <div class="person-child">
          <h3>Cocuk Sayisi</h3>
          <select v-model="state.personChild" @change="selectedItem4">
            <option disabled value="" :selected="true">Cocuk seciminizi yapin</option>
            <option v-for="index in 20" :key="index">{{ index + " çocuk" }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="buttons">
      <ForwardBackButton type="back" />
      <ForwardBackButton type="forward" />
      <button @click="submitForm">Submit</button>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { defineComponent, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import ForwardBackButton from "@/components/ForwardBackButton.vue";

export default defineComponent({
  data() {
    return {
      startDate: "",
      endDate: "",
      personAdult: "",
      personChild: "",
    };
  },
  mounted() {
    if (localStorage.startDate) {
      this.startDate = localStorage.startDate;
    }
    
    if (localStorage.endDate) {
      this.endDate = localStorage.endDate;
    }

    if (localStorage.personAdult) {
      this.personAdult = localStorage.personAdult;
    }

    if (localStorage.personChild) {
      this.personChild = localStorage.personChild;
    }
  },

  watch: {
    startDate(newStartDate) {
      localStorage.setItem('startDate', newStartDate);
      localStorage.startDate = newStartDate;
    },

    endDate(newEndDate) {
      localStorage.setItem('endDate', newEndDate);
      localStorage.endDate = newEndDate;
    },
    
    personAdult(newPersonAdult) {
      localStorage.setItem('personAdult', newPersonAdult);
      localStorage.personAdult = newPersonAdult;
    },

    personChild(newPersonChild) {
      localStorage.setItem('personChild', newPersonChild);
      localStorage.personChild = newPersonChild;
    },
    
    getPersonChild() {
      localStorage.getItem('personChild');
    }
  },
  
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form gonderildi')
      } else {
        alert('Tarih ve kisi secimlerinizi tamamlamalisiniz.')
      }
    },
    selectedItem(startDate) {
      localStorage.setItem('startDate', startDate.target.value);
    },
    selectedItem2(endDate) {
      localStorage.setItem('endDate', endDate.target.value);
    },
    selectedItem3(personAdult) {
      localStorage.setItem('personAdult', personAdult.target.value);
    },

    selectedItem4(personChild) {
      localStorage.setItem('personChild', personChild.target.value);
    },
  },
  name: "PiSecondStep",
  components: { ForwardBackButton },
  setup() {
    const store = useStore();
    const app = getCurrentInstance();

    const setStep = (activeStep) => {
      if (activeStep === 2) {
        return;
      }
      store.commit("setStep", activeStep + 1);
    };
    const hotels = computed(() => store.getters._hotels);
    const activeStep = computed(() => store.getters._activeStep);
    const selectedHotelReactive = computed(() => app.data.selectedHotel);


    const state = reactive ({
      startDate: '',
      endDate: '',
      personAdult: '',
      personChild: '',
    })
    
    const rules = computed(() => {
      return {
        startDate: { required },
        endDate: { required },
        personAdult: { required },
        personChild: { required },
      }
    })

    const v$ = useVuelidate(rules, state)

    return { hotels, setStep, activeStep, selectedHotelReactive, v$, state };
  },
});
</script>
