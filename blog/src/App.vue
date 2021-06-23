<template>
  <router-view />
</template>

<script lang='ts'>
import { watch } from "@vue/runtime-core";
export default {
  name: "App",
  components: {},
  setup() {
    window.resize = function () {
      console.log("浏览器可视宽度" + $(window).width());
      console.log("页面Body宽度" + $(document.body).width());
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
