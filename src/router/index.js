import { createRouter, createWebHistory } from 'vue-router';
import Home from '../isaribi-home/Home.vue';
import Event from '../isaribi-event/Event.vue';
import Product from '../isaribi-product/Product';

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