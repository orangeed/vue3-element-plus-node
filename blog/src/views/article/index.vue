<!-- 文章页面 -->
<template>
  <div id="preview" class="mr-t-15 mr-b-15">
    <preview :articleID="articleID" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Preview from "./components/preview.vue";
import { useRoute } from "vue-router";

interface dataProps {}
export default defineComponent({
  name: "articleContent",
  components: { Preview },
  setup() {
    const route = useRoute();
    const data = reactive({ articleID: route.query.id });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
