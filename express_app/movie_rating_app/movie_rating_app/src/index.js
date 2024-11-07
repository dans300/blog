import { createRouter, createWebHistory } from 'vue-router'; // import Vue Router 4
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});

export default router;
