import Home from '../pages/home/index.vue'
import Login from '../pages/login/index.vue'

import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(), // histroy
    routes, 
    scrollBehavior:() => ({ left: 0, top: 0})
})

export default router
  