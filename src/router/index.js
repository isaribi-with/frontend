import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Event from '../pages/Event.vue';
import Product from '../pages/Product.vue';

const routes = [
  { path: '/', component: Home }, 
  { path: '/event', component: Event },
  { path: '/product', component: Product },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;