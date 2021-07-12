<!-- 本地搜索 -->
<template>
  <div id="search">
    <el-dialog
      title="本地搜索"
      v-model="$store.state.app.dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-input
          v-model="searchInfo"
          placeholder="搜索文章"
          @change="handleSearch"
        ></el-input>
      </div>
      <div>搜索内容区域</div>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleOk">确 定</el-button>
        </span>
      </template> -->
    </el-dialog>
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
    const { dispatch, getters, state } = useStore();

    const data = reactive({
      searchInfo:""
    });
    const handleClose = () => {
      if (getters.dialogVisible) {
        dispatch("app/setSearch", false);
      }
    };
    const handleOk = () => {
      console.log("ok");
    };
    const handleSearch = () => {
      console.log("点击了查询");
    };
    return {
      ...toRefs(data),
      handleClose,
      handleOk,
      handleSearch
    };
  },
});
</script>

<style lang="scss" scoped>
#search {
}
</style>
