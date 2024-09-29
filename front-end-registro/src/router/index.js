import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import Details from '@/view/Details.vue'
import Galery from '@/view/Galery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detalhes/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/galeria/:id',
      name: 'galery',
      component: Galery
    }
  ]
})

export default router
