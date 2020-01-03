import EnrollmentManagementPage from '../page/enrollment-management/EnrollmentManagementPage'
import CourseManagementPage from '../page/course-common/CourseManagementPage'
import ActivityManagementPage from '../page/activity-management/ActivityManagementPage'
import AlumniManagementPage from '../page/alumni-management/AlumniManagementPage'
import AuthorityManagementPage from '../page/authority-management/AuthorityManagementPage'
import WelcomePage from '../page/WelcomPage'

export default [
  {
    path: 'welcome',
    name: 'WelcomePage',
    component: WelcomePage
  },
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
