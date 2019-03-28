import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import InfoData from '@/components/infoData'
import InfoDetail from '@/components/infoDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/infoData:name?',
          name: 'infoData',
          component: InfoData
        },
        {
          path: '/infoDetail',
          name: 'infoDetail',
          component: InfoDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
