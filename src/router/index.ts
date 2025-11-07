import { createRouter, createWebHistory } from 'vue-router'
import UploadPage from '../views/UploadPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'upload',
      component: UploadPage
    }
  ]
})

export default router
