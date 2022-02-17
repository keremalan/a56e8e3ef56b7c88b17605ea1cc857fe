<template>
  <div class="pi-f-bottom">
    <button @click="setStep(activeStep)">
      {{ type === "forward" ? "ileri" : "geri" }}
    </button>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ForwardBackButton",
  props: ["type"],
  methods: {
        submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form gonderildi')
      } else {
        alert('Tarih ve kisi secimlerinizi tamamlamalisiniz.')
      }
    },
  },
  setup(props) {
    const store = useStore();

    const setStep = (activeStep) => {
      if (props.type === "forward" && activeStep !== 3) {
        store.commit("setStep", activeStep + 1);
      } else if (props.type === "back" && activeStep > 0) {
        store.commit("setStep", activeStep - 1);
      }
    };

    const activeStep = computed(() => store.getters._activeStep);

    return { setStep, activeStep };
  },
});
</script>
