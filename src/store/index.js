import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNameOfCourse: 'first',
    activeNameOfEnrollment: 'first',
    semesters: ''
  },
  mutations: {
    changeActiveNameOfEnrollment (state, activeName) {
      state.activeNameOfEnrollment = activeName
    },
    changeActiveNameOfCourse (state, activeName) {
      state.activeNameOfCourse = activeName
    },
    changeSemesters (state, semesters) {
      state.semesters = semesters
    }
  },
  actions: {
    changeActiveNameOfEnrollment (context, activeName) {
      context.commit('changeActiveNameOfEnrollment', activeName)
    },
    changeActiveNameOfCourse (context, activeName) {
      context.commit('changeActiveNameOfCourse', activeName)
    },
    changeSemesters (context, semesters) {
      context.commit('changeSemesters', semesters)
    }
  },
  getters: {
    getActiveNameOfEnrollment (state) {
      return state.activeNameOfEnrollment
    },
    getActiveNameOfCourse (state) {
      return state.activeNameOfCourse
    },
    getSemesters (state) {
      return state.semesters
    }
  },
  modules: {
  }
})
