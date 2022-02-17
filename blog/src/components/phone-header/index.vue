<!-- 移动端的头部菜单 -->
<template>
  <div id="phone-header" class="color-white">
    <div class="flex">
      <div class="flex-1 text-left pa-l-15">橘子的分享</div>
      <div class="flex-1 text-right pa-r-15">
        <i class="iconfont icon-soushuo soushuo pa-r-15" />
        <i class="iconfont icon-menu-two menu" @click="handleShowMenu" />
      </div>
    </div>
  </div>
  <phoneMenu />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import PhoneMenu from "../phone-menu/index.vue";

interface dataProps {}
export default defineComponent({
  name: "",
  components: { PhoneMenu },
  setup() {
    const data = reactive({});
    const { dispatch, getters } = useStore();
    console.log("getters", getters);
    const handleShowMenu = () => {
      if (getters.showMenu) {
        dispatch("app/showMenu", false);
      }
      dispatch("app/showMenu", true);
    };
    return {
      ...toRefs(data),
      handleShowMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
#phone-header {
  font-size: 20px;
  line-height: 60px;
  .soushuo {
    font-size: 20px;
  }
  .menu {
    font-size: 20px;
  }
}
</style>
