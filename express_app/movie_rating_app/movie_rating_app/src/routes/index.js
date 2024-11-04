import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/Home';
import Contact from '@/components/Contact';



Vue.use(Router);

export default new Router({
  routes: [
    {page 130
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      },
     
  ],
});
