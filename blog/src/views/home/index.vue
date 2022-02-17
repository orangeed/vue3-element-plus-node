<!-- 首页 -->
<template>
  <div id="home">
    <articleList />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
} from "vue";
import ArticleList from "./components/main.vue";
// import emitter from "../../utils/mitt";

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

