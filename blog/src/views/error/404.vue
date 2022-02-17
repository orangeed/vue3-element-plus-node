<!-- 404 -->
<template>
  <div id="errorPage">
    <!-- <i class="iconfont icon-icon-test error" /> -->
    <img src="../../assets/404.png" alt="" srcset="" />
    <!-- <input type="text" @keydown="handleKey" /> -->
  </div>
</template>

// <script lang="ts">
// import { defineComponent, reactive, toRefs } from "vue";
// interface dataProps {}
// export default defineComponent({
//   name: "",
//   components: {},
//   setup() {
//     const data = reactive({});
//     const handleKey = (e) => {
//       console.log("e", e.keyCode);
//       if (e.keyCode === 65) {
//         console.log("你按了a");
//       }
//     };
//     return {
//       ...toRefs(data),
//       handleKey,
//     };
//   },
// });
// </script>

<style lang="scss" scoped>
#errorPage {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>