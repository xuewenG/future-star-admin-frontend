import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    identity: '管理员',
    userName: '陈某某某'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    identity: function (state) {
      return state.identity
    },
    userName: function (state) {
      return state.userName
    }
  },
  modules: {
  }
})
