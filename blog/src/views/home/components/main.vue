<!-- 文章列表 -->
<template>
  <div id="mainList">
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="(item, index) in data.articleList"
      class="card"
    >
      <div class="card-out">
        <div class="card-image">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          />
        </div>
        <div class="card-des">
          <p class="title" @click="handleToDetail(item.id)">{{ item.title }}</p>
          <p>
            <span class="author">
              <i class="el-icon-user" style="color: orange" />
              {{ item.author }}
              |
            </span>
            <span class="author">
              <i class="el-icon-date" style="color: pink" />
              发表于：{{ item.createTime }}
            </span>
          </p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getArticleList } from "../../../api/article";
import { dateToSecond } from "../../../utils/index";
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";

interface dataProps {}
export default defineComponent({
  name: "mainList",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log("router", router);
    console.log("route", route);
    const data = reactive({
      articleList: [],
    });
    const pages = reactive({
      total: 0,
      pageSize: 10,
      currentPage: 1,
    });

    // 获取文章列表
    const init = () => {
      getArticleList(pages).then((res) => {
        console.log(res);
        if (res.errorCode === 0) {
          res.data.data.forEach((v) => {
            v.createTime = dateToSecond(v.createTime);
          });
          data.articleList = res.data.data;
          pages.total = res.data.total;
        }
      });
    };
    init();
    // 跳转至文章详情页
    const handleToDetail = (id) => {
      router.push(`/articleDetail?id=${id}`);
    };
    return {
      data,
      handleToDetail,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  cursor: pointer;

  .card-out {
    display: flex;
  }
  .card-image {
    flex: 1;
    // height: 240px;
    // width: 240px;
    overflow: hidden;
    img {
      height: 100%;
      &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
      }
    }
  }
  .card-des {
    flex: 4;
    font-size: 14px;
    text-align: left;
    padding: 0px 40px;
    .title {
      font-size: 24px;
      &:hover {
        // font-size: 30px;
        color: orange;
      }
    }
    .author {
      color: #919191;
    }
  }
}
</style>
