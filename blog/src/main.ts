import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store'
import './style/index.scss'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'

// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

// // highlightjs
// import hljs from 'highlight.js';

// VMdPreview.use(githubTheme, {
//     Hljs: hljs,
// });


const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#app')


