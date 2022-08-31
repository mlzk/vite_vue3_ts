import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../components/layout/columnLayout/Index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Layout,

    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/pages/login/Login.vue'),
        meta: {
          title: '首页',
          icon: 'home-2-line',
          noClosable: true,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
