import { createLocalVue, mount } from '@vue/test-utils'
import DetailOfSemesterPage from '../../../src/page/course-common/DetailOfSemesterPage'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from '../../../src/store'
import router from '../../../src/router'

describe('DetailOfSemesterPage', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(ElementUI)
  localVue.use(VueRouter)
  const wrapper = mount(DetailOfSemesterPage, {
    store,
    router,
    localVue
  })
  test('快照测试', async () => {
    await expect(wrapper.html()).toMatchSnapshot()
  })
})
