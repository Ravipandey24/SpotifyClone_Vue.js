import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage/Mainpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
  ]
})

export default router
