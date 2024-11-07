import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';  // Assurez-vous que ce fichier existe
import Contact from './components/Contact.vue';  // Assurez-vous que ce fichier existe

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
