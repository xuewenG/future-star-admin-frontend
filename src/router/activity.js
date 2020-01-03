import CreateActivityPage from '../page/activity-management/CreateActivityPage'
import EditExistingActivityPage from '../page/activity-management/EditExistingActivityPage'
import ShowActivityParticipantsPage from '../page/activity-management/ShowActivityParticipantsPage'
import ShowActivityInformationPage from '../page/activity-management/ShowActivityInformationPage'

export default [
  {
    path: '/create-activity',
    name: 'CreateActivityPage',
    component: CreateActivityPage
  },
  {
    path: '/edit-activity',
    name: 'EditExistingActivityPage',
    component: EditExistingActivityPage
  },
  {
    path: '/show-participants',
    name: 'ShowActivityParticipantsPage',
    component: ShowActivityParticipantsPage
  },
  {
    path: '/show-activity-details',
    name: 'ShowActivityInformationPage',
    component: ShowActivityInformationPage
  }
]
