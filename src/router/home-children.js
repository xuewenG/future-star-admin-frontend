import EnrollmentManagement from '../components/home-children/EnrollmentManagement'
import CourseManagement from '../components/home-children/CourseManagement'
import ActivityManagement from '../components/home-children/ActivityManagement'
import AlumniManagement from '../components/home-children/AlumniManagement'
import AuthorityManagement from '../components/home-children/AuthorityManagement'
import Welcome from '../components/home-children/Welcome'

export default [
  {
    path: 'welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: 'enrollment',
    name: 'EnrollmentManagement',
    component: EnrollmentManagement
  },
  {
    path: 'course',
    name: 'CourseManagement',
    component: CourseManagement
  },
  {
    path: 'activity',
    name: 'ActivityManagement',
    component: ActivityManagement
  },
  {
    path: 'alumni',
    name: 'AlumniManagement',
    component: AlumniManagement
  },
  {
    path: 'authority',
    name: 'AuthorityManagement',
    component: AuthorityManagement
  }
]
