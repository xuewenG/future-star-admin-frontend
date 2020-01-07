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
    },
    userName: function (state) {
    }
  },
  modules: {
  }
})
