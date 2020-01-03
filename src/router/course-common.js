import DetailOfSemesterPage from '../page/course-common/DetailOfSemesterPage'
import DetailOfClassPage from '../page/course-common/DetailOfClassPage'
import DetailOfCoursePage from '../page/course-common/DetailOfCoursePage'
import ModifySemesterInfoPage from '../page/course-common/ModifySemesterInfoPage'
import ModifyClassInfoPage from '../page/course-common/ModifyClassInfoPage'
import ModifyCourseInfoPage from '../page/course-common/ModifyCourseInfoPage'
import AddCourseResourcePage from '../page/course-common/AddCourseResourcePage'

export default [
  {
    path: '/semester-detail',
    name: 'DetailOfSemesterPage',
    component: DetailOfSemesterPage
  },
  {
    path: '/class-detail',
    name: 'DetailOfClassPage',
    component: DetailOfClassPage
  },
  {
    path: '/course-detail',
    name: 'DetailOfCoursePage',
    component: DetailOfCoursePage
  },
  {
    path: '/modify-semester-info',
    name: 'ModifySemesterInfoPage',
    component: ModifySemesterInfoPage
  },
  {
    path: '/modify-class-info',
    name: 'ModifyClassInfoPage',
    component: ModifyClassInfoPage
  },
  {
    path: '/modify-course-info',
    name: 'ModifyCourseInfoPage',
    component: ModifyCourseInfoPage
  },
  {
    path: '/add-course-resource',
    name: 'AddCourseResourcePage',
    component: AddCourseResourcePage
  },
]
