<!-- 文章页面 -->
<template>
  <div id="preview">
    <preview />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Preview from "./components/preview.vue";
import { useRouter, useRoute } from "vue-router";

interface dataProps {}
export default defineComponent({
  name: "article",
  components: { Preview },
  setup() {
    const router = useRouter();

    const data = reactive({});
    console.log("router", router.query);
    return {
      data,
      router,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
