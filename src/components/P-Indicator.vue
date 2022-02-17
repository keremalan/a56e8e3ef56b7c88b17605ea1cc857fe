<template>
  <div id="progress-indicator">
    <h5 class="">{{ "Adım" + stepCount }}</h5>
    <div class="pi-texts">
      <h3 class="pi-text">Otel <br />Secimi</h3>
      <h3 class="pi-text">
        Tarih ve Kisi <br />
        Secimi
      </h3>
      <h3 class="pi-text">
        Oda Tipi ve Manzara <br />
        Secimi
      </h3>
      <h3 class="pi-text">
        Onizleme ve Odeme <br />
        Islemleri
      </h3>
    </div>
    <div class="pi-bar">
      <div class="pi-bar-inside" :style="{ maxWidth: width + 'px' }"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: ["stepCount"],
  name: "PIndicator",
  setup(props) {
    const widths = [
      { id: 1, width: 125 },
      { id: 2, width: 250 },
      { id: 3, width: 500 },
      { id: 4, width: 978 },
    ];

    const width = computed(() => widths[props.stepCount].width);

    return { width };
  },
});
</script>

<style></style>
