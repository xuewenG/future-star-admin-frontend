import EnrollmentAuditPage from '../page/enrollment-management/EnrollmentAuditPage'
import AddSemesterPage from '../page/enrollment-management/AddSemesterPage'
import AddClassPage from '../page/enrollment-management/AddClassPage'
import EvaluateStudentPage from '../page/enrollment-management/EvaluateStudentPage'

export default [
  {
    path: '/enrollment-audit',
    name: 'EnrollmentAuditPage',
    component: EnrollmentAuditPage
  },
  {
    path: '/add-semester',
    name: 'AddSemesterPage',
    component: AddSemesterPage
  },
  {
    path: '/add-class',
    name: 'AddClassPage',
    component: AddClassPage
  },
  {
    path: '/evaluate-student',
    name: 'EvaluateStudentPage',
    component: EvaluateStudentPage
  }
]
