<!-- 头部 -->
<template>
  <div class="container">
    <el-menu
      :default-active="data.activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">文章</el-menu-item>
      <el-menu-item index="3">常用网站</el-menu-item>
      <el-menu-item index="4">分类</el-menu-item>
      <el-menu-item index="5">留言</el-menu-item>
      <el-menu-item index="6">相册</el-menu-item>
      <el-menu-item index="7">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data = reactive({
      activeIndex: "1",
    });
    const handleSelect = (val) => {
      console.log("val", val);
    };
    return {
      data,
      handleSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
