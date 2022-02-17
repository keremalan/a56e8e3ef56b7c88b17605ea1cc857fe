<template>
  <div class="pi-last">
    <h2 class="pi-last-headline2">Onizleme ve Odeme Islemleri</h2>
    <div class="pi-last--checkout">
      <div class="pi-last--checkout--cardInfo">
        <div class="checkout--cardInfo">
          <div class="cardInfo-top">
            <span class="cardInfo-top--cardName">Huxley Card</span>
            <span class="cardInfo-top--cardType">Bank</span>
          </div>
          <div class="cardInfo-icon">
            <img :src="CardChip" class="cardInfo-icon--img" />
          </div>
          <div class="cardInfo-cardNumber">
            <span>Kart Numarasi</span>
            <span class="cardInfo--cardNumber--numbers">{{ state.cardNumber }}</span>
          </div>
          <div class="cardInfo-bottom">
            <div class="cardInfoBottom--nameAndDate">
              <span>Isim</span>
              <span class="cardInfoBottom--name">{{ state.cardHolderName }}</span>
              <div class="cardInfoBottom-date">
                <span>CVV</span
                ><span class="cardInfoBottom--date"
                  >{{ state.dateMonth }} / {{ state.dateYear }}</span
                >
              </div>
            </div>
            <div class="cardInfoBottom--logo">
              <img :src="MasterCardLogo" class="cardInfoBottom--logoImg" />
            </div>
          </div>
        </div>
        <div class="checkout--cardInput">
          <h2>Kredi Karti Bilgileri</h2>
          <h4 class="checkout--cardInput-headline4">Kartin Uzerindeki Isim</h4>
          <input
            class="checkout-input ci-person"
            v-model="state.cardHolderName"
            placeholder="Kart uzerindeki ismi girin"
            @change="selectedItem5"
          />
          <h4 class="checkout--cardInput-headline4">Kartin Numarasi</h4>
          <input
            class="checkout-input ci-person"
            v-model="state.cardNumber"
            placeholder="Kartin numarasini girin"
            @change="selectedItem6"
          />
          <div class="checkout-cardInput--lastDateAndCVV">
            <div class="checkout-cardInput--lastDate">
              <h4 class="checkout--cardInput-headline4">
                Kart Son Kullanma Tarihi
              </h4>
              <div class="checkout-cardInput-bottom">
                <select
                  class="checkout-cardInput-bottom--select"
                  v-model="state.dateMonth"
                  @change="selectedItem8"
                >
                  <option v-for="index in 12" :key="index">{{ index }}</option>
                </select>
                <select
                v-model="state.dateYear"
                @change="selectedItem9">
                  <option v-for="index in 7" :key="'asd' + index">
                    {{ index + 21 }}
                  </option>
                </select>
              </div>
            </div>
            <div class="checkout-cardInput-CVV">
              <h4 class="checkout--cardInput-headline4">CVV</h4>
              <input
              v-model="state.cardCVV"
              placeholder="CVV Giriniz"
              @change="selectedItem7"
              />
            </div>
          </div>
        </div>
      </div>
      <hr class="display-none-desktop--hr" />
      <h2 class="display-none-desktop">Odeme Bilgileri</h2>
      <div class="pi-last--checkout--reservationOverview">
        <h3 class="pi-last--heckout--reservationOverview-h3">
          {{ getSelectedHotel() }}
        </h3>
        <div class="reservationOverview-piLastStep">
          <div class="reservationOverview-left">
            <div class="reservationOverview-left--startDate">
              <strong>Giris Tarihi:</strong>
              <span>{{ getStartDate() }}</span>
            </div>
            <div class="reservationOverview-left--adultPerson">
              <strong>Yetiskin:</strong>
              <span>{{ getPersonAdult() }}</span>
            </div>
            <div class="reservationOverview-left--roomType">
              <strong>Oda Tipi:</strong>
              <span>Standart</span>
            </div>
          </div>
          <div class="reservationOverview-right">
            <div class="reservationOverview-right--endDate">
              <strong>Cikis Tarihi:</strong>
              <span>{{ getEndDate() }}</span>
            </div>
            <div class="reservationOverview-right--childPerson">
              <strong>Cocuk:</strong>
              <span>{{ getPersonChild() }}</span>
            </div>
            <div class="reservationOverview-right--roomScenic">
              <strong>Manzara:</strong>
              <span>Deniz Manzarali</span>
            </div>
          </div>
        </div>
        <div class="coupon">
          <input
          v-model="state.couponCode"
          placeholder="Kupon kodunu giriniz"
          @change="selectedItem10 "/>
          <button class="btn-coupon">
            Kodu Kullan
          </button>
        </div>
        <div class="reservationOverview-bottom">
          <div class="reservationOverview-bottom--roomPrice">
            <strong>Oda Fiyati</strong>1.127 TL
          </div>
          <div class="reservationOverview-bottom--priceEffect">
            <strong>Fiyat Etki orani</strong><span>%38</span>
          </div>
          <div class="reservationOverview-bottom--dates">
            <div><strong>Konaklama </strong>(5 Gun)</div>
            <span>5.635 TL</span>
          </div>
          <div class="reservationOverview-bottom--discount">
            <div><strong>Indirim </strong>(CODE100)</div>
            <span>-100 TL</span>
          </div>
        </div>
        <hr class="reservationOverview-hr" />
        <div class="reservationOverview-price">
          <h4>Toplam Tutar</h4>
          <span class="reservationOvewview-">7.232 TL</span>
        </div>
      </div>
    </div>
    <div class="reservation-buttons">
      <button @click="submitForm">Submit</button>
      <ForwardBackButton type="back" />
      <button class="reservation-button-right">
        <a href="/reservation">Odeme Yap</a>
      </button>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { defineComponent, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import MasterCardLogo from "@/assets/mc_symbol.svg";
import CardChip from "@/assets/chip.png";
import ForwardBackButton from "@/components/ForwardBackButton.vue";
export default defineComponent({
  data () {
    return {
      couponCode: '',
      cardHolderName: '',
      cardNumber: '',
      cardCVV: '',
      dateMonth: '',
      dateYear: '',
    };
  },
  mounted() {
    if (localStorage.cardHolderName) {
      this.cardHolderName = localStorage.cardHolderName;
    }

    if (localStorage.cardNumber) {
      this.cardNumber = localStorage.cardNumber;
    }

    if (localStorage.cardCVV) {
      this.cardCVV = localStorage.cardCVV;
    }

    if (localStorage.dateMonth) {
      this.dateMonth = localStorage.dateMonth;
    }

    if (localStorage.dateYear) {
      this.dateYear = localStorage.dateYear;
    }

    if (localStorage.couponCode) {
      this.couponCode = localStorage.couponCode;
    }
  },
  watch: {
    cardHolderName(newCardHolderName) {
      localStorage.setItem('cardHolderName', newCardHolderName);
      localStorage.cardHolderName = newCardHolderName;
    },
    cardNumber(newCardNumber) {
      localStorage.setItem('cardNumber', newCardNumber);
      localStorage.cardNumber = newCardNumber;
    },
    cardCVV(newCardNumber) {
      localStorage.setItem('cardCVV', newCardNumber);
      localStorage.cardCVV = newCardNumber;
    },

    dateMonth(newDateMonth) {
      localStorage.setItem('dateMonth', newDateMonth);
      localStorage.dateMonth = newDateMonth;
    },

    dateYear(newDateYear) {
      localStorage.setItem('dateYear', newDateYear);
      localStorage.dateYear = newDateYear;
    },

    couponCode(newCouponCode) {
      localStorage.setItem('couponCode', newCouponCode);
      localStorage.couponCode = newCouponCode;
    },
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form gonderildi')
      } else {
        alert('Kart bilgilerinizi giriniz.')
      }
    },
    selectedItem5(cardHolderName) {
      localStorage.setItem('cardHolderName', cardHolderName.target.value);
    },

    selectedItem6(cardNumber) {
      localStorage.setItem('cardNumber', cardNumber.target.value);
    },

    selectedItem7(cardCVV) {
      localStorage.setItem('cardCVV', cardCVV.target.value);
    },

    selectedItem8(dateMonth) {
      localStorage.setItem('dateMonth', dateMonth.target.value);
    },

    selectedItem9(dateYear) {
      localStorage.setItem('dateYear', dateYear.target.value);
    },

    selectedItem10(couponCode) {
      localStorage.setItem('couponCode', couponCode.target.value);
    },

    getPersonChild () {
      return localStorage.getItem('personChild');
    },

    getPersonAdult () {
      return localStorage.getItem('personAdult');
    },

    getStartDate () {
      return localStorage.getItem('startDate');
    },

    getEndDate () {
      return localStorage.getItem('endDate');
    },

    getSelectedHotel () {
      return localStorage.getItem('selectedHotel');
    }

  },
  name: "PiLastStep",
  components: { ForwardBackButton },
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
      couponCode: '',
      cardHolderName: '',
      cardNumber: '',
      cardCVV: '',
      dateMonth: '',
      dateYear: '',
    })
    
    const rules = computed(() => {
      return {
        cardHolderName: { required },
        cardNumber: { required },
        cardCVV: { required },
        dateMonth: { required },
        dateYear: { required },
      }
    })

    const v$ = useVuelidate(rules, state)

    return { hotels, setStep, activeStep, selectedHotelReactive, v$, state, MasterCardLogo, CardChip };
  },
});
</script>
