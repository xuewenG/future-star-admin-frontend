import ShowAlumniInformationPage from '../page/alumni-management/ShowAlumniInformationPage'
import ShowAlumniEditHistoryPage from '../page/alumni-management/ShowAlumniEditHistoryPage'
import ShowAlumniHistoryInformationPage from '../page/alumni-management/ShowAlumniHistoryInformationPage'
import EditAlumniInformationPage from '../page/alumni-management/EditAlumniInformationPage'

export default [
  {
    path: '/show-all-information',
    name: 'ShowAlumniInformationPage',
    component: ShowAlumniInformationPage
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
  },
  {
    path: '/edit-alumni-information',
    name: 'EditAlumniInformationPage',
    component: EditAlumniInformationPage
  }
]
