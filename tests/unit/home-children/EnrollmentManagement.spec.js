import { createLocalVue, mount } from '@vue/test-utils'
import EnrollmentManagement from '../../../src/components/home-children/EnrollmentManagement'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../../../src/store'
import router from '../../../src/router'

describe('EnrollmentManagement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  localVue.use(VueAxios, axios)
  const wrapper = mount(EnrollmentManagement, {
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
