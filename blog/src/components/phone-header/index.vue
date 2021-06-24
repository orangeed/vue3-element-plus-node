<!-- 移动端的头部菜单 -->
<template>
  <div id="phone-header" class="color-white">
    <div class="flex">
      <div class="flex-1">橘子的分享</div>
      <div class="flex-1">right</div>
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
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
#phone-header {
}
</style>
