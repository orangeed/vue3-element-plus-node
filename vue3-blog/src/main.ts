import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { useElementPlus } from "../src/plugins/element-plus";
import { useTable } from "../src/plugins/vxe-table";
import { usI18n } from "../src/plugins/i18n";

// 导入公共样式
import "./style/index.scss";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";

import "v-contextmenu/dist/themes/default.css";

import { setConfig, getConfig } from "./config";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.$config = getConfig();
app.config.globalProperties.$store = store

// 获取项目动态全局配置
export const getServerConfig = async (): Promise<any> => {
  return axios({
    baseURL: "",
    method: "get",
    url:
      process.env.NODE_ENV === "production"
        ? "/manages/serverConfig.json"
        : "/serverConfig.json",
  })
    .then(({ data: config }) => {
      let $config = app.config.globalProperties.$config;
      // 自动注入项目配置
      if (app && $config && typeof config === "object") {
        $config = Object.assign($config, config);
        app.config.globalProperties.$config = $config;
        // 设置全局配置
        setConfig($config);
      }
      // 设置全局baseURL
      app.config.globalProperties.$baseUrl = $config.baseURL;
      return $config;
    })
    .catch(() => {
      throw "请在public文件夹下添加serverConfig.json配置文件";
    });
};

getServerConfig().then(() => {
  app
    .use(router)
    .use(store)
    .use(useElementPlus)
    .use(useTable)
    .use(usI18n)
    .mount("#app");
});
