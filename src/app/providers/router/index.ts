import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: defineAsyncComponent(() => import('@/pages/main/ui/MainPage.vue'))
    }
  ]
})
