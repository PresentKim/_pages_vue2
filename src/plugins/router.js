import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/components/core/Home.vue');
const PasswordStength = () => import('@/components/tools/PasswordStength.vue');

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
    {
      path: '/tools/passwordstength',
      name: 'PasswordStength',
      component: PasswordStength
    },
  ]
});
