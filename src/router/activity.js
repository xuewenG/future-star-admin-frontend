import CreateActivityPage from '../page/activity-management/CreateActivityPage'
import ShowActivityParticipantsPage from '../page/activity-management/ShowActivityParticipantsPage'
import EditExistingActivityPage from '../page/activity-management/EditExistingActivityPage'
import ShowActivityInformationPage from '../page/activity-management/ShowActivityInformationPage'

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
