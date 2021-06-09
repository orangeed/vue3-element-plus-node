<!-- layout -->
<template>
  <el-container id="container" class="container">
    <el-header><orangeHeader /> </el-header>
    <div class="header-image">
      <img src="https://z3.ax1x.com/2020/12/06/DXvn6s.png" />
    </div>
    <el-main class="home">
      <div class="left">
        <router-view :key="key" v-slot="{ Component }">
          <transition appear name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
      <div class="right">
        <orangeAside />
      </div>
    </el-main>
    <el-footer> <orangeFooter /></el-footer>
    <el-backtop> </el-backtop>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import OrangeHeader from "../components/header/index.vue";
import OrangeFooter from "../components/footer/index.vue";
import OrangeAside from "../components/aside/index.vue";

interface dataProps {}
export default defineComponent({
  name: "",
  components: { OrangeHeader, OrangeFooter, OrangeAside },
  setup() {
    const route = useRoute();
    const key = computed(() => route.path);

    return { key };
  },
});
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
  .home {
    max-width: 1630px;
    // min-width: 1630px;
    margin: 0 auto;
    display: flex;
    .left {
      flex: 4;
      margin-right: 30px;
      width: 100%;
    }
    .right {
      flex: 1;
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
