import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/index.scss'
import './assets/icon/iconfont.css'
import { setupDirectives } from './utils/directive'
import 'papercss'

const setup = () => {
    const app = createApp(App)
    // setWired(app)
    // 全局注册自定义指令
    setupDirectives(app)
    app.use(router)
    app.mount('#app')
}
setup()
