<!-- 首页 -->
<!-- 首页 -->
<template>
  <div id="home">
    <articleList class="left" />
    <div class="right">aside</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import ArticleList from "../article/index.vue";
interface dataProps {}
export default defineComponent({
  name: "home",
  components: { ArticleList },
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
#home {
  width: 1200px;
  display: flex;
  .left {
    flex: 4;
  }
  .right {
    flex: 1;
  }
}
</style>
