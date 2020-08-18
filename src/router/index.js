import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home.vue')
const classify = () => import('views/classify/classify')
const paycar = () => import('views/paycar/paycar')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/Detail')
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/classify',
    name: 'classify',
    component: classify
  }, {
    path: '/paycar',
    name: 'paycar',
    component: paycar
  }, {
    path: '/profile',
    name: 'profile',
    component: profile
  }, {
    path: '/detail/:iid',
    name: 'detail',
    component: detail
  }],
  mode: 'history'
})

export default router
