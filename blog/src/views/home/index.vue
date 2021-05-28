<!-- 首页 -->
<template>
  <div id="home">
    <articleList class="left" />
    <div class="right">
      <orangeAside />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import OrangeAside from "./components/aside.vue";
import ArticleList from "./components/main.vue";

interface dataProps {}
export default defineComponent({
  name: "home",
  components: { ArticleList, OrangeAside },
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
  max-width: 1630px;
  margin: 0 auto;
  display: flex;
  .left {
    flex: 4;
    margin-right: 30px;
  }
  .right {
    flex: 1;
  }
}
</style>
