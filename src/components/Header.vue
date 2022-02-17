<template>
  <header>
    <div class="header-brand">
      <img :src="Logo" class="logo-img" />
    </div>
    <div class="header-nav">
      <a href="#">bilgi</a>
      <a href="#rezervasyon">rezervasyon</a>
      <a href="#turkce">turkce</a>
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/icons/logo.svg";
export default {
  name: "Header",
  setup() {
    return {
      Logo,
    };
  },
};
</script>
