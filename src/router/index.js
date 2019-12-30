import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../page/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
