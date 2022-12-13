
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 清除基础样式
import 'normalize.css'
import './style.css'


createApp(App).use(router).mount('#app')
