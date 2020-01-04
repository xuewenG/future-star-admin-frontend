import { mount } from '@vue/test-utils'
import LoginPage from '../../src/page/LoginPage'

describe('LoginPage', () => {
  const wrapper = mount(LoginPage)
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('按钮', async () => {
    const button = wrapper.find('el-button')
    await expect(button.text()).toBe('登录')
  })
})
