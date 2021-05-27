/*
 * @Author: orange 
 * @Date: 2021-05-22 16:42:40 
 * @Last Modified by: orange
 * @Last Modified time: 2021-05-27 10:25:22
 */
<template>
  <div class="table">
    <vxe-toolbar>
      <template #buttons>
        <vxe-input
          v-model="tablePage.searchName"
          placeholder="搜索文章标题"
          style="width: 300px"
        >
          <template #prefix> <i class="fa fa-search"></i> </template
        ></vxe-input>
        <vxe-button icon="vxe-icon--search">搜索</vxe-button>
        <vxe-button status="primary" icon="vxe-icon--plus">新增</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      border
      resizable
      show-footer
      :data="gridOptions.data"
      style="height: 700px"
    >
      <vxe-column type="checkbox" width="60" align="center"></vxe-column>
      <vxe-column type="seq" width="50" align="center"></vxe-column>
      <vxe-column
        field="title"
        title="标题"
        align="center"
        width="200"
      ></vxe-column>
      <vxe-column
        field="author"
        title="作者"
        align="center"
        width="200"
      ></vxe-column>
      <vxe-column
        field="description"
        title="文章简介"
        align="center"
        min-width="200px"
      ></vxe-column>
      <vxe-column
        field="createTime"
        title="创建时间"
        align="center"
        width="200"
      ></vxe-column>
      <vxe-column
        field="changeTime"
        title="修改时间"
        align="center"
        width="200"
      ></vxe-column>
      <vxe-column field="state" title="状态" align="center" width="100">
        <template #default="{ row }">
          <el-tag :type="row.state == 1 ? 'success' : 'info'" effect="dark">
            {{ row.state === 1 ? "已发布" : "草稿" }}
          </el-tag>
        </template>
      </vxe-column>
      <vxe-column field="operating" title="操作" align="center" width="100">
        <template #default="{ row }">
          <vxe-button
            status="primary"
            size="mini"
            @click="handleShowDetail(row.id)"
            >详情</vxe-button
          >
        </template>
      </vxe-column>
    </vxe-table>
    <vxe-pager
      perfect
      v-model:current-page="tablePage.currentPage"
      v-model:page-size="tablePage.pageSize"
      :total="tablePage.total"
      :layouts="[
        'PrevJump',
        'PrevPage',
        'Number',
        'NextPage',
        'NextJump',
        'Sizes',
        'FullJump',
        'Total',
      ]"
    >
    </vxe-pager>
  </div>
</template>

<script lang='ts'>
import { reactive } from "vue";
import { VxeGridProps, VxePagerEvents } from "vxe-table";
import { getArticleList } from "/@/api/article";
import { successMessage, errorMessage } from "/@/utils/message";
import { useRouter } from "vue-router";
import { dateToSecond } from "/@/utils/tool";

export default {
  name: "user",
  setup() {
    const router = useRouter();
    const gridOptions = reactive({
      border: true,
      resizable: true,
      keepSource: true,
      height: "100%",
      loading: false,
      align: "center",
      printConfig: {},
      importConfig: {},
      exportConfig: {},
      toolbarConfig: {
        custom: true,
        slots: {
          buttons: "buttons",
          default: "operating",
        },
        // refresh: {
        //   icon: "fa fa-refresh",
        //   iconLoading: "fa fa-spinner fa-spin",
        // },
        // import: {
        //   icon: "fa fa-upload",
        // },
        export: {
          icon: "fa fa-download",
        },
        print: {
          icon: "fa fa-print",
        },
        zoom: {
          iconIn: "fa fa-arrows-alt",
          iconOut: "fa fa-expand",
        },
        custom: {
          icon: "fa fa-cog",
        },
      },
      data: [],
      columns: [
        { type: "checkbox", width: 50 },
        { type: "seq", width: 60 },
        // { field: "title", title: "title", editRender: { name: "input" } },
        { field: "title", title: "标题" },
        { field: "author", title: "作者" },
        {
          field: "description",
          title: "文章简介",
          showOverflow: true,
        },
        { field: "createTime", title: "创建时间" },
        { field: "changeTime", title: "修改时间" },
        { field: "state", title: "状态" },
        {
          field: "operating",
          title: "操作",
        },
      ],
    } as VxeGridProps);
    const tablePage = reactive({
      searchName: "",
      total: 0,
      pageSize: 10,
      currentPage: 1,
    });
    const handlePageChange: VxePagerEvents.PageChange = ({
      currentPage,
      pageSize,
    }) => {
      tablePage.currentPage = currentPage;
      tablePage.pageSize = pageSize;
      getList();
    };
    const getList = () => {
      gridOptions.loading = true;
      // 获取文章列表
      getArticleList(tablePage)
        .then((res) => {
          console.log(res);
          if (res.errorCode === 0) {
            gridOptions.loading = false;
            tablePage.total = res.data.total;
            res.data.data.forEach((v) => {
              v.createTime = dateToSecond(v.createTime);
            });
            gridOptions.data = res.data.data;
            successMessage("获取数据成功！");
          } else {
            errorMessage(res.message);
          }
        })
        .catch((error) => {
          errorMessage(error.message);
        });
    };
    getList();
    const handleShowDetail = (id) => {
      console.log("id", id);
      router.push(`/article/edit?id=${id}`);
    };

    return {
      gridOptions,
      tablePage,
      handlePageChange,
      handleShowDetail,
    };
  },
};
</script>

<style scoped lang='scss'>
.table {
  margin: 0 20px 0 20px;
}
</style>
