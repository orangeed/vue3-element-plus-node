import { createApp } from 'vue'
import App from './App.vue'
import "wired-elements";
import router from './router/index'
import './style/index.scss'
import './assets/icon/iconfont.css'


createApp(App).use(router).mount('#app')
