<!-- markdown编辑 -->
<template>
  <v-md-editor v-model="text" height="90%"></v-md-editor>
  <div class="btn-group">
    <el-button type="primary" @click="handleSave" class="btn-save"
      >保存</el-button
    >
  </div>
</template>
 
<script lang="ts">
import { defineComponent, ref } from "vue";
import "@kangc/v-md-editor/lib/style/preview.css";
import { createArticle } from "/@/api/article";
import { warnMessage, successMessage, errorMessage } from "/@/utils/message";

export default defineComponent({
  name: "edit",
  setup() {
    const text = ref("");
    const handleSave = () => {
      console.log("text", text);
      const articleInfo = {
        title: "这是一个文章标题",
        description: "这是文章的简介",
        content: "这是文章的内容",
        createTime: "2021-05-21",
        state: 2,
      };
      if (text) {
        createArticle(articleInfo)
          .then((res) => {
            if (res.errorCode === 0) {
              successMessage("文章保存成功！");
            } else {
              errorMessage(res.message);
            }
          })
          .catch((error) => {
            errorMessage(error.message);
          });
      } else {
        warnMessage("请输入文章内容");
      }
    };
    return { text, handleSave };
  },
});
</script>

 
<style lang='scss'>
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .btn-save {
    width: 200px;
  }
}
</style>