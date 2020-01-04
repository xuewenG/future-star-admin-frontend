import { mount } from '@vue/test-utils'
import ShowActivityInformationPage from '../../../src/page/activity-management/ShowActivityInformationPage'

describe('ShowActivityInformationPage', () => {
  const wrapper = mount(ShowActivityInformationPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
