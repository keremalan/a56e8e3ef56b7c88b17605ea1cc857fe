<template>
  <component :is="layout"> <router-view /> </component>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();

    const layout = computed(() => {
      return router.currentRoute.value.meta.layout;
    });

    return {
      layout,
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
