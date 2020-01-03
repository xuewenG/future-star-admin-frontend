import Vue from 'vue'
import VueRouter from 'vue-router'
import common from './common'
import courseCommon from './course-common'
import enrollment from './enrollment'
import course from './course'
import activity from './activity'
import alumni from './alumni'
import authority from './authority'

Vue.use(VueRouter)

const routes = [
  ...common,
  ...courseCommon,
  ...enrollment,
  ...course,
  ...activity,
  ...alumni,
  ...authority
]

const router = new VueRouter({
  routes
})

export default router
