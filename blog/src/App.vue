<template>
  <el-container>
    <el-header> <orangeHeader /></el-header>
    <el-main class="home"> <home /></el-main>
    <el-footer> <orangeFooter /></el-footer>
  </el-container>
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
.home {
  // width: 1200px;
  margin: 0 auto;
}
</style>
