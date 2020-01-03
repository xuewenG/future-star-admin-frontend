import ModifyEnrollmentClassInfoPage from '../page/enrollment-management/ModifyEnrollmentClassInfoPage'
import AddNewCoursePage from '../page/course-common/AddNewCoursePage'
import EnrollmentAuditPage from '../page/enrollment-management/EnrollmentAuditPage'

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
