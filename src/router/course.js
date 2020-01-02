import AddNewSemesterPage from '../page/AddNewSemesterPage'
import AddClassPage from '../page/AddClassPage'
import ClassDetailPage from '../page/ClassDetailPage'
import ModifyCourseClassInfo from '../page/ModifyCourseClassInfo'

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
  }
]
