<!-- 文章页面 -->
<template>
  <div class="container">
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
          <p class="title">{{ item.title }}</p>
          <p>
            <span class="author"
              ><i class="el-icon-user" style="color: orange" />{{ item.author }}
              |
            </span>
            <span class="author"
              ><i class="el-icon-date" style="color: pink" />发表于：{{
                item.createTime
              }}</span
            >
          </p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getArticleList } from "../../api/article";
import { dateToSecond } from "../../utils/iddex";

interface dataProps {}
export default defineComponent({
  name: "article",
  components: {},
  setup() {
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
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  .card-out {
    display: flex;
  }
  .card-image {
    flex: 1;
    img {
      height: 100%;
    }
  }
  .card-des {
    flex: 4;
    font-size: 14px;
    .title {
      font-size: 24px;
    }
    .author {
      color: #919191;
    }
  }
}
</style>
