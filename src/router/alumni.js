import ShowAlumniInformationPage from '../page/alumni-management/ShowAlumniInformationPage'
import EditAlumniInformationPage from '../page/alumni-management/EditAlumniInformationPage'
import ShowAlumniEditHistoryPage from '../page/alumni-management/ShowAlumniEditHistoryPage'
import ShowAlumniHistoryInformationPage from '../page/alumni-management/ShowAlumniHistoryInformationPage'

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
