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

</style>
