import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail.vue')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
