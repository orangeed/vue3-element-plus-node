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
          placeholder="搜索文章，按回车键进行搜索"
          @change="handleSearch"
        ></el-input>
      </div>
      <div v-show="searchData.length > 0" class="text-left">
        <div v-for="(item, index) in searchData" :key="index">
          <h2 @click="handleActicleDetail(item.id)">{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getSearch } from "../../api/article";

interface dataProps {}
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const { dispatch, state } = useStore();
    const router = useRouter();

    const data = reactive({
      searchInfo: "",
      searchData: [],
    });
    const handleClose = () => {
      if (state.app.dialogVisible) {
        data.searchInfo = "";
        data.searchData = [];
        dispatch("app/setSearch", false);
      }
    };

    const handleSearch = () => {
      getSearch({ searchParams: data.searchInfo })
        .then((res) => {
          console.log(res);
          if (res.errorCode === 0) {
            data.searchData = [...res.data];
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    const handleActicleDetail = (id) => {
      handleClose();
      router.push(`/articleDetail?id=${id}`);
    };
    return {
      ...toRefs(data),
      handleClose,
      handleSearch,
      handleActicleDetail,
    };
  },
});
</script>

<style lang="scss" scoped>
#search {
  h2 {
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
}
</style>
<style lang="scss" >
body {
  // padding-right: 0px !important;
}
</style>
