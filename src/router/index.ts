import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("@/views/HomePage.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/AboutPage.vue")
  },
  {
    path: '/reports/report1',
    name: 'Report 1',
    component: () => import("@/views/reports/ReportOne.vue"),
  },
  {
    path: '/reports/report2',
    name: 'Report 2',
    component: () => import("@/views/reports/ReportTwo.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
