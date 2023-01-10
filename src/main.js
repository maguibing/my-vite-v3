import axios from 'axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { naive } from './naive-ui'
import '@/components'

// 清除基础样式
import 'normalize.css'
import './style.css'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// import 'uno.css'

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router).use(pinia).use(naive).mount('#app')
