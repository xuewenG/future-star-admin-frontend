import { createLocalVue, mount } from '@vue/test-utils'
import ShowAlumniHistoryInformationPage from '../../../src/page/alumni-management/ShowAlumniHistoryInformationPage'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from '../../src/store'
import router from '../../src/router'

describe('ShowAlumniHistoryInformationPage', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  const wrapper = mount(ShowAlumniHistoryInformationPage, {
    store,
    router,
    localVue
  })
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
