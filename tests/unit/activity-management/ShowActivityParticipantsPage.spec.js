import { mount } from '@vue/test-utils'
import ShowActivityParticipantsPage from '../../../src/page/activity-management/ShowActivityParticipantsPage'

describe('ShowActivityParticipantsPage', () => {
  const wrapper = mount(ShowActivityParticipantsPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
