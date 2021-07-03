<!-- layout -->
<template>
  <el-container id="container" class="container">
    <el-header>
      <orangeHeader v-if="!getters.isPhone" />
      <orangePhoneHeader v-else />
    </el-header>
    <div class="header-image">
      <img
        src="https://z3.ax1x.com/2020/12/06/DXvn6s.png"
        style="height: 40vh; width: 100%"
      />
      <div class="img-data color-white" v-if="path === '/articleDetail'">
        <h2>{{ coverInfo.title }}</h2>
        <p>发布时间：{{ coverInfo.createTime }}</p>
        <p>作者：{{ coverInfo.author }}</p>
        <p v-if="coverInfo.changeTime">修改时间：{{ coverInfo.changeTime }}</p>
      </div>
      <div class="img-data color-white " v-else-if="path === '/index'">
        <p class="f-s-20">{{ indexInfo.content }}</p>
        <p class="f-s-14">{{ indexInfo.author }}</p>
      </div>
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
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import OrangeHeader from "../components/header/index.vue";
import OrangeFooter from "../components/footer/index.vue";
import OrangeAside from "../components/aside/index.vue";
import OrangePhoneHeader from "../components/phone-header/index.vue";
import axios from "axios";
import emitter from "../utils/mitt";

type Events = {
  foo: string;
  bar?: number;
};
interface dataProps {}
export default defineComponent({
  name: "",
  components: { OrangeHeader, OrangeFooter, OrangeAside, OrangePhoneHeader },
  setup() {
    const route = useRoute();
    const key = computed(() => route.path);
    const { getters, state } = useStore();
    const data = reactive({
      coverInfo: state.app.titleInfo,
      path: key.value,
      indexInfo: {},
    });
    // 每日一言的api
    const everyDayApi = (val) => {
      console.log("everyDayApi", val);
      if (val === "/index") {
        axios.get("https://v1.jinrishici.com/all").then((res) => {
          console.log(res);
          data.indexInfo = res.data;
        });
      }
    };
    emitter.on("coverInfo", (val) => {
      console.log("emitter", val);
      data.coverInfo = val;
    });
    everyDayApi(key.value);
    watch(key, (val) => {
      data.path = val;
      everyDayApi(val);
    });
    watch(getters.titleInfo, (val) => {
      console.log("val", val);
    });

    return { ...toRefs(data), key, getters, everyDayApi };
  },
});
</script>

<style lang="scss" scoped>
// 整体框架
#container {
  padding: 0px;
  margin: 0px;

  .header-image {
    padding: 0px;
    margin-top: -60px;
    position: relative;
    .img-data {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .home {
    max-width: 1630px;
    width: 100%;
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
