import { mount } from '@vue/test-utils/types'
import LoginPage from '../../src/page/LoginPage'

describe('LoginPage', () => {
  test('是一个 Vue 实例', () => {
    const wrapper = mount(LoginPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
