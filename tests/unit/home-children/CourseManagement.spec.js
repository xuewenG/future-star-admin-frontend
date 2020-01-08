import { createLocalVue, mount } from '@vue/test-utils'
import CourseManagement from '../../../src/components/home-children/CourseManagement'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../../../src/store'
import router from '../../../src/router'

describe('CourseManagement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  localVue.use(VueAxios, axios)
  const wrapper = mount(CourseManagement, {
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
