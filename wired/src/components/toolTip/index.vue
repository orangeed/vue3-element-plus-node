<!-- 侧边工具栏 -->
<template>
  <div id="toolTip">
    <div class="theme-icon">
      <i
        class="iconfont icon-yueduqi_yewanmoshi-98 toolTip-text"
        @click="handleChangeThemes"
        v-if="themeData.isDark"
      />
      <i
        class="iconfont icon-baitianmoshi light toolTip-text"
        @click="handleChangeThemes"
        v-else
      />
      <i
        class="iconfont icon-huidaodingbu toolTip-text toTop"
        @click="handleToTop"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import { changeTheme } from "./ts/changeTheme"
interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const { themeData, handleChangeThemes, handleToTop } = changeTheme()
    return {
      themeData,
      handleChangeThemes,
      handleToTop
    }
  }
})
</script>

<style lang="scss" scoped>
#toolTip {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 90vh;
  .theme-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    .light {
      color: orange;
    }
    .toTop {
      color: none;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
