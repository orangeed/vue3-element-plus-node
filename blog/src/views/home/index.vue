<!-- 首页 -->
<template>
  <div id="home">
    <articleList />
    <search />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import ArticleList from "./components/main.vue";
import Search from "../../components/search/index.vue";
// import emitter from "../../utils/mitt";

export default defineComponent({
  name: "home",
  components: { ArticleList, Search },
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

