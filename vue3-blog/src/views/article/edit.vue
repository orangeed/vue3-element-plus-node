<!-- markdown编辑 -->
<template>
  <div id="edit">
    <el-form
      :model="edit.editFormModel"
      :rules="rules"
      ref="articleFormRef"
      label-width="100px"
      class="demo-ruleForm"
      style="margin: 20px 0 0 0"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="文章标题" prop="title">
            <el-input
              v-model="edit.editFormModel.title"
              placeholder="请输入文章标题"
            ></el-input>
          </el-form-item>
          <el-form-item label="文章作者" prop="author">
            <el-input
              v-model="edit.editFormModel.author"
              placeholder="请输入文章作者"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker
              v-model="edit.editFormModel.createTime"
              placeholder="请输入文章创建时间"
              type="datetime"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="修改时间">
            <el-date-picker
              v-model="edit.editFormModel.updateTime"
              placeholder="请输入修改时间"
              type="datetime"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="state">
            <el-select
              v-model="edit.editFormModel.state"
              placeholder="请选择文章状态"
              filterable
            >
              <el-option label="发布" value="1"> </el-option>
              <el-option label="草稿" value="2"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章简介" prop="description">
            <el-input
              type="textarea"
              v-model="edit.editFormModel.description"
              placeholder="请输入文章简介"
              maxlength="200"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <v-md-editor
      v-model="edit.editFormModel.content"
      height="100%"
    ></v-md-editor>
    <div class="btn-group">
      <el-button type="primary" @click="handleSave" class="btn-save"
        >保存</el-button
      >
    </div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent, reactive, ref, refs } from "vue";
import "@kangc/v-md-editor/lib/style/preview.css";
import { createArticle, getArticleDetail } from "/@/api/article";
import { warnMessage, successMessage, errorMessage } from "/@/utils/message";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "edit",
  setup() {
    // 表单数据
    const edit = reactive({
      editFormModel: {},
      // title: "",
      // author: "",
      // content: "",
      // createTime: "",
      // updateTime: "",
      // description: "",
    });

    let articleFormRef = ref(null);
    // 表单验证规则
    const rules: object = ref({
      title: [{ required: true, message: "请填写文章标题", trigger: "blur" }],
      author: [{ required: true, message: "请输入文章作者", trigger: "blur" }],
      createTime: [
        { required: true, message: "请输入文章创建时间", trigger: "blur" },
      ],
      description: [
        { required: true, message: "请输入文章简介", trigger: "blur" },
      ],
      state: [{ required: true, message: "请选择文章状态", trigger: "change" }],
    });
    // 如果存在id的话，就获取文章详情
    const route = useRoute();
    console.log("route", route.query);
    if (route.query.id) {
      getArticleDetail({ id: route.query.id })
        .then((res) => {
          if (res.errorCode === 0) {
            edit.editFormModel = { ...res.data };
            // editFormModel = refs(`${res.data}`);
            console.log("editFormModel", edit.editFormModel);
          } else {
            errorMessage(res.message);
          }
        })
        .catch((error) => {
          errorMessage(error.message);
        });
    }
    // 保存文章
    const handleSave = () => {
      console.log("editFormModel", edit.editFormModel.createTime);

      articleFormRef.value.validate((valid) => {
        console.log("valid", valid);
        if (!valid) return warnMessage("请填写必要字段");
        createArticle(edit.editFormModel)
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
      });
    };

    return { edit, articleFormRef, rules, handleSave };
  },
});
</script>

 
<style lang='scss'>
#edit {
  margin: 0 20px 0 20px;
  height: 70%;
}
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .btn-save {
    width: 200px;
  }
}
</style>


