import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../page/LoginPage'
import HomePage from '../page/HomePage'
import EnrollmentManagementPage from '../page/EnrollmentManagementPage'
import CourseManagementPage from '../page/CourseManagementPage'
import ActivityManagementPage from '../page/ActivityManagementPage'
import AlumniManagementPage from '../page/AlumniManagementPage'
import AuthorityManagementPage from '../page/AuthorityManagementPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: 'enrollment-management',
        name: 'EnrollmentManagementPage',
        component: EnrollmentManagementPage
      },
      {
        path: 'course-management',
        name: 'CourseManagementPage',
        component: CourseManagementPage
      },
      {
        path: 'activity-management',
        name: 'ActivityManagementPage',
        component: ActivityManagementPage
      },
      {
        path: 'alumni-management',
        name: 'AlumniManagementPage',
        component: AlumniManagementPage
      },
      {
        path: 'authority-management',
        name: 'AuthorityManagementPage',
        component: AuthorityManagementPage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
