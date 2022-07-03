import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FrontPage from '../views/FrontPage/FrontPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'frontpage',
    component: FrontPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
