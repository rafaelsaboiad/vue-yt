import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '@/pages/home.vue'
import userSearch from '@/pages/userSearch.vue'

const routes = [
  {
    path:'/',
    component:home
  },
  {
    path:'/',
    component: userSearch
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;