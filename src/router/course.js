import AddNewSemesterPage from '../page/enrollment-management/AddNewSemesterPage'
import AddClassPage from '../page/enrollment-management/AddClassPage'
import ClassDetailPage from '../page/course-common/ClassDetailPage'
import ModifyCourseClassInfo from '../page/course-common/ModifyCourseClassInfo'
import ModifySemesterInfoPage from '../page/course-common/ModifySemesterInfoPage'
import GraduationAuditPage from '../page/course-management/GraduationAuditPage'
import SemesterDetail from '../page/course-common/SemesterDetailPage'
import CourseClassDetailPage from '../page/course-common/CourseClassDetailPage'
import AddCourseResourcePage from '../page/course-common/AddCourseResourcePage'
import CourseDetailPage from '../page/course-common/CourseDetailPage'
import ModifyCourseInfoPage from '../page/course-common/ModifyCourseInfoPage'

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
