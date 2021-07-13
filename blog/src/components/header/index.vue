<!-- 头部 -->
<template>
  <div id="header">
    <div class="left">LOGO</div>
    <!-- <div class="middle">
      <el-input
        placeholder="请输入内容"
        v-model="searchInfo"
        class="input-with-select"
      >
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
    </div> -->
    <div class="right">
      <span class="menu-link" @click="handleSearch">
        <i class="iconfont icon-soushuo soushuo pa-r-15" />
      </span>
      <span
        class="menu-link"
        v-for="(item, index) in menuLink"
        @click="handleToPage(item.router)"
      >
        <span>{{ item.label }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const router = useRouter();
    const { dispatch, getters, state } = useStore();
    const data = reactive({
      activeIndex: "1",
      searchInfo: "",
      menuLink: [
        {
          router: "/index",
          label: "首页",
        },
        {
          router: "/article",
          label: "文章",
        },
        {
          router: "/website",
          label: "常用网站",
        },
        {
          router: "/classification",
          label: "分类",
        },
        {
          router: "/message",
          label: "留言",
        },
        {
          router: "/album",
          label: "相册",
        },
        {
          router: "/about",
          label: "关于",
        },
      ],
    });
    const handleSelect = (val) => {
      console.log("val", val);
    };
    // 跳转路由
    const handleToPage = (val) => {
      // console.log("val", val);
      router.push(val);
    };
    const handleSearch = () => {
      console.log("state", state.app.dialogVisible);
      if (state.app.dialogVisible) {
        dispatch("app/setSearch", false);
        return;
      }
      dispatch("app/setSearch", true);
      console.log("stateNew", state.app.dialogVisible);
    };
    return {
      ...toRefs(data),
      handleSelect,
      handleToPage,
      handleSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0px 30px;
  background: transparent;
  color: #fff;
  .left {
    flex: 1;
    text-align: left;
  }
  .middle {
    flex: 1;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .menu-link {
      display: block;
      min-width: 60px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      padding: 0 5px;
      font-size: 14px;
      position: relative;
      a {
        /* 必须有下面这三行：这可以让此“div”移到父级的中央（而不是中心与中心重合） */
        position: absolute;
        top: 50%;
        left: 50%;
        cursor: pointer;
        /* 然后再去位移 —— 上面往哪偏，这里往回移。   （正百分比是往右、下） */
        transform: translate(-50%, -50%);
      }
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background: rgb(255, 170, 0);
        position: absolute;
        top: 100%;
        left: 50%;
        transition: all 0.5s;
      }
      &:hover::after {
        left: 0%;
        width: 100%;
      }
    }
  }
}
</style>
<style>
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
