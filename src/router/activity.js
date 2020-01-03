import CreateActivityPage from '../page/CreateActivityPage'
import ShowActivityParticipantsPage from '../page/ShowActivityParticipantsPage'
import EditExistingActivityPage from '../page/EditExistingActivityPage'
import ShowActivityInformationPage from '../page/ShowActivityInformationPage'

export default [
  {
    path: '/create-activity',
    name: 'CreateActivityPage',
    component: CreateActivityPage
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
  },
  {
    path: '/show-activity-details',
    name: 'ShowActivityInformationPage',
    component: ShowActivityInformationPage
  }
]
