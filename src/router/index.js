import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/Aboute.vue';
import TestPage from '../views/Test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Use HomePage, as it matches the export from Home.vue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage, // Use AboutPage, as it matches the export from About.vue
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
