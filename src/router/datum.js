import ShowAlumniInformationPage from '../page/ShowAlumniInformationPage'
import EditAlumniInformationPage from '../page/EditAlumniInformationPage'
import ShowAlumniEditHistoryPage from '../page/ShowAlumniEditHistoryPage'
import ShowAlumniHistoryInformationPage from '../page/ShowAlumniHistoryInformationPage'

export default [
  {
    path: '/show-all-information',
    name: 'ShowAlumniInformationPage',
    component: ShowAlumniInformationPage
  },
  {
    path: '/edit-alumni-information',
    name: 'EditAlumniInformationPage',
    component: EditAlumniInformationPage
  },
  {
    path: '/show-edit-history',
    name: 'ShowAlumniEditHistoryPage',
    component: ShowAlumniEditHistoryPage
  },
  {
    path: '/show-history-information',
    name: 'ShowAlumniHistoryInformationPage',
    component: ShowAlumniHistoryInformationPage
  }
]
