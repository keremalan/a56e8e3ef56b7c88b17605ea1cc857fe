<template>
  <div id="status-bar">
    <div class="r-text">
      <h2>Rezervasyonunuz</h2>
    </div>
    <span>I</span>
    <div class="r-date">
      <span class="r-date-start">Giris Tarihi </span>
      <span class="status-bar-spacer">-</span>
      <span class="r-date-end"> Cikis Tarihi</span>
      <span class="status-bar-state">(Secilmedi)</span>
    </div>
    <span>I</span>
    <div class="r-people">
      <span class="r-people-adult">Yetiskin</span>
      <span> ve </span>
      <span class="r-people-child">Cocuk Sayisi</span>
      <span class="status-bar-state">(Secilmedi)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
};
</script>
