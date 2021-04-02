import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/template',
    name: 'Template',
    component: () => import(/* webpackChunkName: "template" */ '../views/Template.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import(/* webpackChunkName: "view" */ '../views/View.vue')
  }
];

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory(process.env.BASE)
    : createWebHistory(process.env.BASE),
  routes
});

export default router;
