import Vue from 'vue';
import Router from 'vue-router';

const PhrasePage = () => import('../pages/PhrasePage/PhrasePage.vue');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/secret-meaning',
      component: PhrasePage,
    },

  ]
})

Vue.use(Router);

