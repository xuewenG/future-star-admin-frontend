import { mount } from '@vue/test-utils'
import EditExistingActivityPage from '../../../src/page/activity-management/EditExistingActivityPage'

describe('EditExistingActivityPage', () => {
  const wrapper = mount(EditExistingActivityPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
