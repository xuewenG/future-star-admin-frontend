import AddNewSemesterPage from '../page/AddNewSemesterPage'
import AddClassPage from '../page/AddClassPage'
import ClassDetailPage from '../page/ClassDetailPage'
import ModifyCourseClassInfo from '../page/ModifyCourseClassInfo'
import ModifySemesterInfoPage from '../page/ModifySemesterInfoPage'
import GraduationAuditPage from '../page/GraduationAuditPage'
import SemesterDetail from '../page/SemesterDetailPage'
import CourseClassDetailPage from '../page/CourseClassDetailPage'
import AddCourseResourcePage from '../page/AddCourseResourcePage'
import CourseDetailPage from '../page/CourseDetailPage'
import ModifyCourseInfoPage from '../page/ModifyCourseInfoPage'

export default [
  {
    path: '/add-new-semester',
    name: 'AddNewSemester',
    component: AddNewSemesterPage
  },
  {
    path: '/add-class',
    name: 'AddClassPage',
    component: AddClassPage
  },
  {
    path: '/class-detail',
    name: 'ClassDetailPage',
    component: ClassDetailPage
  },
  {
    path: '/modify-course-class-info',
    name: 'ModifyCourseClassInfo',
    component: ModifyCourseClassInfo
  },
  {
    path: '/modify-semester-info',
    name: 'ModifySemesterInfoPage',
    component: ModifySemesterInfoPage
  },
  {
    path: '/semester-detail',
    name: 'SemesterDetail',
    component: SemesterDetail
  },
  {
    path: '/graduation-audit',
    name: 'GraduationAuditPage',
    component: GraduationAuditPage
  },
  {
    path: '/course-class-detail',
    name: 'CourseClassDetailPage',
    component: CourseClassDetailPage
  },
  {
    path: '/add-course-resource',
    name: 'AddCourseResourcePage',
    component: AddCourseResourcePage
  },
  {
    path: '/course-detail',
    name: 'CourseDetailPage',
    component: CourseDetailPage
  },
  {
    path: '/modify-course-info',
    name: 'ModifyCourseInfoPage',
    component: ModifyCourseInfoPage
  }
]
