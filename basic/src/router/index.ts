import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: '/loki/about',
        children: [
            {
                path: '/loki/:page*',
                name: 'loki-main',
                component: () => import('@/components/microAppRoot.vue')
            },
            {
                path: '/thor/:page*',
                name: 'thor-main',
                component: () => import('@/components/microAppRoot.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
