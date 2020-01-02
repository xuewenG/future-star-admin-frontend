import CreateActivityPage from '../page/CreateActivityPage'
import ShowAlumniInformationPage from '../page/ShowAlumniInformationPage'
import ShowActivityParticipantsPage from '../page/ShowActivityParticipantsPage'
import EditExistingActivityPage from '../page/EditExistingActivityPage'

export default [
  {
    path: '/create-activity',
    name: 'CreateActivityPage',
    component: CreateActivityPage
  },
  {
    path: '/show-all-information',
    name: 'ShowAlumniInformationPage',
    component: ShowAlumniInformationPage
  },
  {
    path: '/show-participants',
    name: 'ShowActivityParticipantsPage',
    component: ShowActivityParticipantsPage
  },
  {
    path: '/edit-activity',
    name: 'EditExistingActivityPage',
    component: EditExistingActivityPage
  }
]
