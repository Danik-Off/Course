import { createRouter, createWebHistory } from 'vue-router';

import ListingPage from '../pages/ListingPage.vue'
import ProductPage from '../pages/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ListingPage
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage
    }

    
  ]
})

export default router
