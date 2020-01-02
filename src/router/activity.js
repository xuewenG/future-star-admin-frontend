import CreateActivityPage from '../page/CreateActivityPage'
import ShowAlumniInformationPage from '../page/ShowAlumniInformationPage'
import ShowActivityParticipantsPage from '../page/ShowActivityParticipantsPage'

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
  }
]
