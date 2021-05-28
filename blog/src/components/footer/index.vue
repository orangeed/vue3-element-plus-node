<!-- 底部 -->
<template>
  <div id="footer">
    <div class="left">
      <p>©2020 - 2021 By 橘子orange</p>
      <p>备案：</p>
    </div>
    <div class="right">
      <el-tooltip placement="top" effect="light">
        <template #content>
          <img src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg" style="width:150px" alt="微博">
        </template>
        <i class="iconfont icon-weibo weibo">
      </el-tooltip>
      <el-tooltip placement="top" effect="light">
        <template #content>
          <img src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg" style="width:150px" alt="微信公众号">
        </template>
        <i class="iconfont icon-weixingongzhonghao weixingongzhonghao">
      </el-tooltip>
      <el-tooltip placement="top" effect="light">
        <template #content> 
          <img src="https://s1.ax1x.com/2020/07/04/NxncdA.jpg" style="width:150px" alt="知乎">
        </template>
        <i class="iconfont icon-zhihu zhihu">
      </el-tooltip>
    </div>
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
#footer {
  height: 200px;
  display: flex;
  font-size: 14px;
  background-color: #ccc;
  padding-top: 30px;
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
    .icon {
      font-size: 50px;
      margin: 0px 10px;
    }
    .weibo {
      color: #fe596c;
      @extend .icon;
    }
    .weixingongzhonghao {
      color: #42c86b;
      @extend .icon;
    }
    .zhihu {
      color: #0084ff;
      @extend .icon;
    }
  }
}
</style>
