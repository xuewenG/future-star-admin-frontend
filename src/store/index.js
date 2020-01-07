import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    setUser: function (state, user) {
      state.user = user
    }
  },
  actions: {
    setUser: function (context, user) {
      context.commit('setUser', user)
    }
  },
  getters: {
    identity: function (state) {
      if (state.user.privilege.super === 2) {
        return '管理员'
      } else if (state.user.privilege.super === 1) {
        return '超级管理员'
      }
    },
    name: function (state) {
      return state.user.name
    },
    user: function (state) {
      return state.user
    }
  },
  modules: {
  }
})
