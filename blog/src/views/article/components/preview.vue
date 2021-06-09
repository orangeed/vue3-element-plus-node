<!-- markdown 预览组件 -->
<template>
  <div class="preview-com">
    <el-card :body-style="{ padding: '0px' }" class="card">
      <v-md-preview :text="data.blog"></v-md-preview>
    </el-card>
  </div>
</template>

<script lang="ts">
import "@kangc/v-md-editor/lib/style/preview.css";
import { defineComponent, reactive, toRefs } from "vue";
interface dataProps {}
export default defineComponent({
  name: "preview",
  components: {},
  setup() {
    const data = reactive({
      blog: null,
    });
    // const refData = toRefs(data);
    return {
      data,
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

