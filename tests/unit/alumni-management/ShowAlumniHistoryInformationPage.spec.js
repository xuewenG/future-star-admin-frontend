import { mount } from '@vue/test-utils'
import ShowAlumniHistoryInformationPage from '../../../src/page/alumni-management/ShowAlumniHistoryInformationPage'

describe('ShowAlumniHistoryInformationPage', () => {
  const wrapper = mount(ShowAlumniHistoryInformationPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('按钮', async () => {
    const header = wrapper.find('el-page-header')
    await expect(header.attributes('content')).toBe('修改历史详情')
  })
})
