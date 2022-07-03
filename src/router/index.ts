import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import FrontPage from '../views/FrontPage/FrontPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'frontpage',
    component: FrontPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
