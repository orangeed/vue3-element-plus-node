<!-- 首页 -->
<template>
  <div id="home">
    <articleList />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import ArticleList from "./components/main.vue";

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
}
</style>

