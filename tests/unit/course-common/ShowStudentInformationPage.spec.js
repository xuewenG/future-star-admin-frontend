import { createLocalVue, mount } from '@vue/test-utils'
import ShowStudentInformationPage from '../../../src/page/course-common/ShowStudentInformationPage'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from '../../../src/store'
import router from '../../../src/router'

describe('ShowStudentInformationPage', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  localVue.use(VueAxios, axios)
  const wrapper = mount(ShowStudentInformationPage, {
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
