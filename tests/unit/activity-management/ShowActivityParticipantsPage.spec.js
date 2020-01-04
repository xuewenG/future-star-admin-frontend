import { createLocalVue, mount } from '@vue/test-utils'
import ShowActivityParticipantsPage from '../../../src/page/activity-management/ShowActivityParticipantsPage'
import store from '../../../src/store'
import router from '../../../src/router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

describe('ShowActivityParticipantsPage', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  const wrapper = mount(ShowActivityParticipantsPage, {
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
})
