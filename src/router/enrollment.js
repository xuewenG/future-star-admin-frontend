import ModifyEnrollmentClassInfoPage from '../page/ModifyEnrollmentClassInfoPage'
import AddNewCoursePage from '../page/AddNewCoursePage'
import EnrollmentAuditPage from '../page/EnrollmentAuditPage'

export default [
  {
    path: '/modify-enrollment-class-info',
    name: 'ModifyEnrollmentClassInfoPage',
    component: ModifyEnrollmentClassInfoPage
  },
  {
    path: '/add-new-course',
    name: 'AddNewCoursePage',
    component: AddNewCoursePage
  },
  {
    path: '/enrollment-audit',
    name: 'EnrollmentAuditPage',
    component: EnrollmentAuditPage
  }
]
