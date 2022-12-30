import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import VueMeta from 'vue-meta';
import './index.css';
Vue.use(VueMeta);
Vue.use(VueResource, { router });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
