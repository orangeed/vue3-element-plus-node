import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store'
import './style/index.scss'
import './style/publicCss.scss'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'


const app = createApp(App)

app.use(router).use(store).use(ElementPlus).mount('#app')


