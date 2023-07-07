import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

// 定义路由规则
const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/user', component: User}
]

const router = new VueRouter({
    routes
})

export default router