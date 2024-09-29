import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import Details from '@/view/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detalhes',
      name: 'details',
      component: Details
    }
  ]
})

export default router
