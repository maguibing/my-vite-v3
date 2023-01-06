
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
// import 'uno.css'



createApp(App).use(router).use(pinia).use(naive).mount('#app')
