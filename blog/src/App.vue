<template>
  <router-view />
</template>

<script lang='ts'>
import { computed, onMounted, watch, ref } from "vue";
import { useStore } from "vuex";
import { debounce } from "./utils/index";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    onMounted(() => {
      window.onresize = () => {
        // debounce(changeClientWidth, 1000);
        if (document.body.clientWidth < 1000) {
          console.log("改变了");
          store.dispatch("app/isPhone", true);
        } else {
          store.dispatch("app/isPhone", false);
        }
      };
    });
    const changeClientWidth = () => {
      if (document.body.clientWidth < 1000) {
        console.log("改变了");
        store.dispatch("app/isPhone", true);
      } else {
        store.dispatch("app/isPhone", false);
      }
    };
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>
