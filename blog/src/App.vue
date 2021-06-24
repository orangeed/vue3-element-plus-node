<template>
  <router-view />
</template>

<script lang='ts'>
import { useStore } from "vuex";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    if (document.body.clientWidth < 1024) {
      store.dispatch("app/isPhone", true);
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
