import Vue from 'vue'
import VueRouter from 'vue-router'
import activity from './activity'
import enrollment from './enrollment'
import course from './course'
import common from './common'
import datum from './datum'
import authority from './authority'

Vue.use(VueRouter)

const routes = [
  ...activity,
  ...enrollment,
  ...course,
  ...common,
  ...datum,
  ...authority
]

const router = new VueRouter({
  routes
})

export default router
