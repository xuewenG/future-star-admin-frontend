import { mount } from '@vue/test-utils'
import CreateActivityPage from '../../../src/page/activity-management/CreateActivityPage'

describe('CreateActivityPage', () => {
  const wrapper = mount(CreateActivityPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
