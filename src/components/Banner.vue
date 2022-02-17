<template>
  <div>
    <img :src="BannerImg" />
    <div class="banner-info">
      <h2>The Huxley Hotel, Istanbul</h2>
      <address>Alan Mah, Adnan Su Cad, No: 187, Taksim/Istanbul</address>
      <span id="phone">+90(216) 277 77-77</span>
    </div>
  </div>
</template>

<script>
import BannerImg from "@/assets/banner.png";
export default {
  name: "Banner",
  setup() {
    return {
      BannerImg,
    };
  },
};
</script>
