<!-- markdown 预览组件 -->
<template>
  <div class="container"></div>
</template>

<script lang="ts">
import marked from "marked";
import { defineComponent, reactive, toRefs } from "vue";
interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data = reactive({
      blog: null,
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>

