<template>
  <div class="paymentSuccess">
    <div class="paymentSuccess-top">
      <img :src="PaymentSuccess" class="paymentSuccess-icon" />
      <h2>Rezervasyonunuz basariyla gerceklesmistir.</h2>
      <span
        >Rezervasyon kaydinizda degisiklik yapabilir veya yeni rezervasyon
        olusturabilirsiniz.</span
      >
      <button onclick="window.print();">Yazdir</button>
    </div>
    <div class="reservationOverview">
      <h2>Rezervasyon Detaylari</h2>
      <div class="reservationOverview-roomImage">
        <img :src="RoomType1" />
      </div>
      <div class="reservationOverview-details">
        <div class="reservationOverview-details--date">
          <div class="details-date">
            <h4>Tarihler</h4>
            <div class="reservationOverview-details--date-startDate">
              <strong>Giris Tarihi:</strong>
              <span class="reservationOverview-details--span"
                >{{ getStartDate() }}</span
              >
            </div>
            <div class="reservationOverview-details--date-endDate">
              <strong>Cikis Tarihi:</strong>
              <span class="reservationOverview-details--span"
                >{{ getEndDate() }}</span
              >
            </div>
          </div>
        </div>
        <div class="reservationOverview-details--person">
          <h4>Kisiler</h4>
          <div class="details-person">
            <div class="reservationOverview-details--person-adultPerson">
              <strong>Yetiskin:</strong>
              <span class="reservationOverview-details--span">{{ getPersonAdult() }}</span>
            </div>
            <div class="reservationOverview-details--person-childPerson">
              <strong>Cocuk:</strong>
              <span class="reservationOverview-details--span">{{ getPersonChild() }}</span>
            </div>
          </div>
        </div>
        <div class="reservationOverview-details--room">
          <h4>Oda Secimi</h4>
          <div class="details-room">
            <div class="reservationOverview-details--room-roomType">
              <strong>Oda Tipi:</strong>
              <span class="reservationOverview-details--span">Standart</span>
            </div>
            <div class="reservationOverview-details--room-roomScenic">
              <strong>Manzara:</strong>
              <span class="reservationOverview-details--span"
                >Deniz Manzarali</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paymentOverview">
      <h2>Odeme Ozeti</h2>
      <div class="paymentOverview-roomPrice">
        <strong>Oda Fiyati</strong>1.127 TL
      </div>
      <div class="paymentOverview-priceEffect">
        <strong>Fiyat Etki orani</strong><span>%38</span>
      </div>
      <div class="paymentOverview-dates">
        <div><strong>Konaklama </strong>(5 Gun)</div>
        <span>5.635 TL</span>
      </div>
      <div class="paymentOverview-discount">
        <div><strong>Indirim </strong>(CODE100)</div>
        <span>-100 TL</span>
      </div>
      <hr class="paymentOverview-hr" />
      <div class="paymentOverview-price">
        <h3 class="paymentOverview-price--headline3">Toplam Tutar</h3>
        <span class="paymentOverview-price--span">7.676 TL</span>
      </div>
    </div>
    <div class="reservationOptions">
      <button><a href="/">Yeni Rezervasyon Yap</a></button>
      <button><a href="/">Rezervasyonu Guncelle</a></button>
      <button v-on:click="alert">Rezervasyonu Iptal Et</button>
    </div>
  </div>
</template>

<script>
import PaymentSuccess from "@/assets/paymentSuccess-icon.png";
import RoomType1 from "@/assets/roomType-1.png";
export default {
  name: "PaymentSuccess",
  setup() {
    return {
      PaymentSuccess,
      RoomType1,
    };
  },
  methods: {
    alert: function () {
      alert("Rezervasyon iptali icin canli destege ulasin.");
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
};
</script>
