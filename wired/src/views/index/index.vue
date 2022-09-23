<!-- 首页 -->
<template>
  <div id="index">
    <!-- <i class="iconfont icon-juzix juzi" /> -->
    <navigation />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import navigation from "./components/nav.vue";
interface dataProps {}
export default defineComponent({
  name: "",
  components: { navigation },
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
#index {
}
</style>
