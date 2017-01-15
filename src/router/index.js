/**
 * Created by chen on 2016/11/22.
 */
import Vue from 'vue';
import index from '../view/index/index';
import Home from '../view/home/home';
import Show from '../view/show/show';
import File from '../view/film/film';
import Cirle from '../view/circle/circle';
import Movies from '../components/movies/movies';
import Cinemas from '../components/cinemas/cinemas';
import OfflineShow from '../components/offlineShow/offlineShow';
import WaitShow from '../components/waitShow/waitShow';
import HotShowing from '../components/hotShowing/hotShowing';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const route = [
  { path: '/index', component: index },
  { path: '/home', component: Home },
  { path: '/show', component: Show },
  { path: '/film',
    component: File,
    children: [
      {
        path: 'movies',
        component: Movies,
        children: [
          {
            path: 'hotShowing',
            component: HotShowing
          },
          {
            path: 'waitShow',
            component: WaitShow
          },
          {
            path: 'offlineShow',
            component: OfflineShow
          }
        ]
      },
      {
        path: 'cinemas',
        component: Cinemas
      }
     ]
    },
  { path: '/cirle', component: Cirle }
];

const router = new VueRouter({
  routes: route,
  history: true,
  mode: 'history'
});

export default router;
