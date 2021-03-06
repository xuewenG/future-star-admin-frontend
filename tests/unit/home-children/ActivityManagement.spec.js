import { createLocalVue, mount } from '@vue/test-utils'
import ActivityManagement from '../../../src/components/home-children/ActivityManagement'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from '../../../src/store'
import router from '../../../src/router'

describe('ActivityManagement', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  const wrapper = mount(ActivityManagement, {
    store,
    router,
    localVue
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
