import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'

import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(), // histroy
    routes, 
})

export default router
  