<template>
  <div class="login">
    <info
      :ruleForm="contextInfo"
      @on-behavior="onLogin"
      @refreshVerify="refreshVerify"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { reactive, onBeforeMount, getCurrentInstance } from "vue";
import info, { ContextProps } from "../components/info/index.vue";
// import { getVerify, getLogin } from "/@/api/user";
import { login, getUserInfo } from "/@/api/login";
import { useRouter } from "vue-router";
import { storageSession } from "/@/utils/storage";
import { warnMessage, successMessage, errorMessage } from "/@/utils/message";
import MD5 from "md5";

export default {
  name: "login",
  components: {
    info,
  },
  setup() {
    const router = useRouter();
    const { proxy }: any = getCurrentInstance();
    const { dispatch, getters } = useStore();

    // 刷新验证码
    const refreshGetVerify = async () => {
      let { svg } = await getVerify();
      contextInfo.svg = svg;
    };

    const contextInfo: ContextProps = reactive({
      userName: "orange",
      passWord: "111111",
      verify: null,
      svg: null,
    });

    const toPage = (info: Object): void => {
      storageSession.setItem("info", info);
      router.push("/");
    };

    // 登录
    const onLogin = async () => {
      console.log('contextInfo',contextInfo);
      const loginInfo = await login({
        username: contextInfo.userName,
        password: MD5(contextInfo.passWord),
      });
      if (loginInfo.errorCode === 0) {
        storageSession.setItem("token", loginInfo.data.token);
        dispatch("app/saveUserName", contextInfo.userName);
        router.push("/welcome");
        successMessage("登录成功！");
      } else {
        errorMessage(loginInfo.message);
      }
    };

    const refreshVerify = (): void => {
      refreshGetVerify();
    };

    onBeforeMount(() => {
      // refreshGetVerify();
    });

    return {
      contextInfo,
      onLogin,
      router,
      toPage,
      refreshVerify,
    };
  },
};
</script>
