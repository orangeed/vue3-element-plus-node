<!-- 手机菜单 -->
<template>
  <div id="phone-menu">
    <el-drawer title="我是标题" v-model="showMenu" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";

interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const { getters } = useStore();
    const data = reactive({
      showMenu: getters.showMenu,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
#phone-menu {
}
</style>
