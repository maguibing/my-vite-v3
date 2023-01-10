
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { naive } from './naive-ui'
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 清除基础样式
import 'normalize.css'
import './style.css'
import axios from 'axios'
// import 'uno.css'


const app  = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router).use(pinia).use(naive).mount('#app')
