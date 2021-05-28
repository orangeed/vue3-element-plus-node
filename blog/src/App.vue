<template>
  <el-container id="container" class="container">
    <el-header><orangeHeader /> </el-header>
    <div class="header-image">
      <img src="https://z3.ax1x.com/2020/12/06/DXvn6s.png" />
    </div>
    <el-main class="home">
      <home />
    </el-main>
    <el-footer> <orangeFooter /></el-footer>
    <el-backtop> </el-backtop>
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
#container {
  padding: 0px;
  margin: 0px;
  .header-image {
    padding: 0px;
    margin-top: -60px;
    img {
      height: 40vh;
      width: 100%;
    }
  }
}
.el-header {
  padding: 0;
  z-index: 99;
}
.el-main {
  padding: 0;
}
.el-footer {
  padding: 0;
}
</style>
