import { mount } from '@vue/test-utils'
import EditAlumniInformationPage from '../../../src/page/alumni-management/EditAlumniInformationPage'

describe('EditAlumniInformationPage', () => {
  const wrapper = mount(EditAlumniInformationPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('按钮', async () => {
    const header = wrapper.find('el-page-header')
    await expect(header.attributes('content')).toBe('修改校友信息')
  })
})
