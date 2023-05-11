import { createRouter, createWebHistory } from 'vue-router';

import ListingPage from '../pages/ListingPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import CartPage from '../pages/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ListingPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
    ,
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }

    
  ]
})

export default router
