<!-- markdown 预览组件 -->
<template>
  <div class="preview-com">
    <el-card :body-style="{ padding: '0px' }" class="card pa-a-30 text-left">
      <div ref="mark" v-html="content"></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { getArticleDetail } from "../../../api/article";
import { warnMessage } from "../../../utils/message";
import Mark from "marked";
import hljs from "highlight.js"; // 引入 highlight.js
import "highlight.js/styles/monokai-sublime.css"; // 引入高亮样式 这里我用的是sublime样式
import { useStore } from "vuex";
import emitter from "../../../utils/mitt";

interface dataProps {}
export default defineComponent({
  name: "preview",
  components: {},
  props: {
    articleID: {
      type: String,
      default: 0,
    },
  },
  setup(props) {
    const articleID = props.articleID;
    const { dispatch } = useStore();

    const data = reactive({
      content: null,
    });
    const mark = ref(null);
    console.log("mark", mark);
    Mark.setOptions({
      renderer: new Mark.Renderer(),
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
      gfm: true, //启用Github的风格
      tables: true, //启动表格， 前提必须gfm: true
      breaks: false, //启用回车换行，前提必须gfm: true
      pedantic: false, //尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误
      sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签)
      smartLists: true, //使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉
      smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号
    });
    // 获取文章详情
    getArticleDetail({ articleID }).then((res) => {
      console.log(res.data);
      if (res.errorCode !== 0) {
        warnMessage(res.message);
      }
      // dispatch("app/setTitleInfo", {
      //   title: res.data.title,
      //   createTime: res.data.createTime,
      //   updataTime: res.data.updataTime,
      // });
      emitter.emit("coverInfo", {
        title: res.data.title,
        author: res.data.author,
        createTime: `${res.data.createTime.split("T")[0]} ${
          res.data.createTime.split("T")[1].split(".")[0]
        }`,
        updataTime: res.data.updataTime,
      });

      data.content = Mark(res.data.content).replace(
        /<pre>/g,
        "<pre class='hljs'>"
      );
      // console.log("data.content", data.content);
    });
    return {
      ...toRefs(data),
      mark,
    };
  },
});
</script>

<style lang="scss" scoped>
#preview-com {
  .card {
    width: 100%;
    padding: 20px;
  }
}
</style>
<style lang="scss" >
/*  给markdown加上样式 */
blockquote {
  margin: 0;
  border-left: 3px solid #33afc5;
}

blockquote p {
  padding: 15px;
  background: #eeebeb;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}
table,
table tr th,
table tr td {
  border: 1px solid #ced0d1;
}
table {
  width: 200px;
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
  padding: 2px;
}
table td,
table th {
  padding: 10px 5px;
}
p {
  line-height: 30px;
}
</style>

