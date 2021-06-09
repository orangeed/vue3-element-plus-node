<!-- markdown 预览组件 -->
<template>
  <div class="preview-com">
    <el-card :body-style="{ padding: '0px' }" class="card">11 </el-card>
  </div>
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
#preview-com {
  .card {
    width: 100%;
  }
}
</style>

