import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Data from '@/views/data'
import File from '@/views/file'
import Service from '@/views/service'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/data',
          name: 'data',
          component: Data
        },
        {
          path: '/file',
          name: 'file',
          component: File
        },
        {
          path: '/service',
          name: 'service',
          component: Service
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    }
  ]
})
