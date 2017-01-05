/**
 * Created by chen on 2016/11/22.
 */
import Vue from 'vue';
import index from '../view/index/index';
import Home from '../view/home/home';
import Show from '../view/show/show';
import File from '../view/film/film';
import Cirle from '../view/circle/circle';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const route = [
  { path: '/index', component: index },
  { path: '/home', component: Home },
  { path: '/show', component: Show },
  { path: '/film', component: File },
  { path: '/cirle', component: Cirle }
];

const router = new VueRouter({
  routes: route,
  history: true,
  mode: 'history'
});

export default router;
