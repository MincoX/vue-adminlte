import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '@/Index.vue'

import Login from '@/views/user/Login.vue'
import UserPerm from '@/views/user/UserPerm.vue'
import UserList from '@/views/user/UserList.vue'

import Vformly from '@/views/test/Vformly.vue'

const routes = [
  {
    path: '',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    component: Index,
    children: [
      {
        path: 'list',
        name: 'list',
        component: UserList,
      },
      {
        path: 'perm',
        name: 'perm',
        component: UserPerm,
      },
    ],
  },
  {
    path: '/test',
    component: Index,
    children: [
      {
        path: 'vformly',
        name: 'vformly',
        component: Vformly,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
