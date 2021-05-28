import { createApp } from 'vue';
import App from './App.vue';
import './style/index.scss'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')


