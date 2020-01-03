import DetailOfSemesterPage from '../page/course-common/DetailOfSemesterPage'
import DetailOfClassPage from '../page/course-common/DetailOfClassPage'
import DetailOfCoursePage from '../page/course-common/DetailOfCoursePage'
import EditSemesterInfoPage from '../page/course-common/EditSemesterInfoPage'
import EditClassInfoPage from '../page/course-common/EditClassInfoPage'
import EditCourseInfoPage from '../page/course-common/EditCourseInfoPage'
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
    path: '/edit-semester-info',
    name: 'EditSemesterInfoPage',
    component: EditSemesterInfoPage
  },
  {
    path: '/edit-class-info',
    name: 'EditClassInfoPage',
    component: EditClassInfoPage
  },
  {
    path: '/edit-course-info',
    name: 'EditCourseInfoPage',
    component: EditCourseInfoPage
  },
  {
    path: '/add-course-resource',
    name: 'AddCourseResourcePage',
    component: AddCourseResourcePage
  }
]
