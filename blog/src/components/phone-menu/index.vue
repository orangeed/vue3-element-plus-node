<!-- 手机菜单 -->
<template>
  <div id="phone-menu">
    <el-drawer
      v-model="$store.state.app.showMenu"
      :with-header="false"
      :size="'80%'"
    >
      <div class="head flex flex-jcc flex-aic mr-t-15">
        <el-avatar @error="errorHandler" :size="120">
          <img src="../../assets/head.jpg" />
        </el-avatar>
      </div>
      <p class="f-s-14">须知少时凌云志，曾许人间第一流</p>
      <el-menu default-active="2" class="text-left">
        <el-menu-item
          v-for="(item, index) in menuList"
          :index="item.name"
          :key="index"
          class="mr-l-30"
        >
          <i :class="`iconfont icon-${item.icon} f-s-16 mr-r-15`" />
          <template #title
            ><span class="f-s-16">{{ item.name }}</span></template
          >
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";

interface dataProps {}
export default defineComponent({
  name: "",
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  components: {},

  setup(props) {
    const store = useStore();
    console.log("store", store.state.app.showMenu);
    const data = reactive({
      menuList: [
        {
          name: "首页",
          icon: "index-copy",
          path: "/",
        },
        {
          name: "文章",
          icon: "wenzhang",
          path: "/article",
        },
        {
          name: "常用网站",
          icon: "changyongwangzhan",
          path: "/website",
        },
        {
          name: "分类",
          icon: "leimupinleifenleileibie",
          path: "/classification",
        },
        {
          name: "留言",
          icon: "liuyan",
          path: "/message",
        },
        {
          name: "相册",
          icon: "xiangce",
          path: "/album",
        },
        {
          name: "关于",
          icon: "guanyu",
          path: "/about",
        },
      ],
    });
    const errorHandler = () => true;
    return {
      ...toRefs(data),
      errorHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
#phone-menu {
  .head {
    height: 140px;
  }
}
</style>
