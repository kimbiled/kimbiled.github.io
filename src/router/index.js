import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import Home from '/src/views/Home.vue';
import AboutUs from '/src/views/AboutUs.vue';
import OurProducts from '/src/views/OurProducts.vue';


Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/ourproducts',
    name: 'OurProducts',
    component: OurProducts,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
