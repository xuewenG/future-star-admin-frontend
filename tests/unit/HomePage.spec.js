import { createLocalVue, mount } from '@vue/test-utils'
import HomePage from '../../src/page/HomePage'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from '../../src/store'
import router from '../../src/router'

describe('HomePage', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  const wrapper = mount(HomePage, {
    store,
    router,
    localVue
  })
  test('是一个 Vue 实例', async () => {
    await expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
