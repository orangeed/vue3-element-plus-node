<!-- 侧边栏 -->
<template>
  <div id="aside">
    <!-- 个人简介 -->
    <el-card class="box-card">
      <el-avatar
        :size="100"
        src="https://s1.ax1x.com/2020/07/07/UA7cFS.jpg"
      ></el-avatar>
      <h3>橘子orange</h3>
      <h5>须知少时凌云志，曾许人间第一流</h5>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
#aside {
  margin: 20px 0;
}
</style>
