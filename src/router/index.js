import { createRouter, createWebHistory } from 'vue-router';

import ListingPage from '../pages/ListingPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ListingPage
    }

    
  ]
})

export default router
