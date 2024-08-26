import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // lazy load the view
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
