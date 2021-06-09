<template>
  <router-view />
</template>

<script lang='ts'>
import orangeHeader from "./components/header/index.vue";
import Home from "./views/home/index.vue";
import orangeFooter from "./components/footer/index.vue";

export default {
  name: "App",
  components: {
    orangeHeader,
    Home,
    orangeFooter,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
</style>
