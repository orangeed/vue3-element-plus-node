<!-- markdown编辑 -->
<template>
  <div>
    <mavon-editor
      :toolbars="createData.toolbars"
      @imgAdd="handleEditorImgAdd"
      @imgDel="handleEditorImgDel"
      style="height: 600px"
      v-model="markDownValue"
      @change="handleChange"
      ref="md"
    />
    <!-- {{ createData.obj.aaa }} -->
  </div>
</template>
 
<script lang="ts">
import { defineComponent, reactive } from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default defineComponent({
  components: { mavonEditor },
  setup() {
    const createData = reactive({
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: false, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      markDownValue: "",
    });
    // 添加图片
    const handleEditorImgAdd = () => {
      console.log("添加图片");
    };
    // 删除图片
    const handleEditorImgDel = () => {
      console.log("删除图片");
    };
    // 改变时的函数
    const handleChange = () => {
      console.log("handleChange");
    };
    return {
      createData,
    };
  },
});
</script>

 
 <style>
</style>