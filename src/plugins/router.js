import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
});
