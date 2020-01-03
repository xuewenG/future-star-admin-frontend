import { mount } from '@vue/test-utils'
import LoginPage from '../../src/page/LoginPage'

describe('LoginPage', () => {
  const wrapper = mount(LoginPage)
  test('快照测试', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('是一个 Vue 实例', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
