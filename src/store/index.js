import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndexOfNavigation: '0',
    activeNameOfCourse: 'first',
    activeNameOfEnrollment: 'first',
    semesters: '',
    currentSemester: '',
    infoOfAnAlumni: null
  },
  mutations: {
    changeActiveIndexOfNavigation (state, activeIndex) {
      state.activeIndexOfNavigation = activeIndex
    },
    changeActiveNameOfEnrollment (state, activeName) {
      state.activeNameOfEnrollment = activeName
    },
    changeActiveNameOfCourse (state, activeName) {
      state.activeNameOfCourse = activeName
    },
    changeSemesters (state, semesters) {
      state.semesters = semesters
    },
    changeInfoOfAnAlumni (state, alumniInfo) {
      state.infoOfAnAlumni = alumniInfo
    },
    changeCurrentSemester (state, semester) {
      state.currentSemester = semester
    }
  },
  actions: {
    changeActiveIndexOfNavigation (context, activeIndex) {
      context.commit('changeActiveIndexOfNavigation', activeIndex)
    },
    changeActiveNameOfEnrollment (context, activeName) {
      context.commit('changeActiveNameOfEnrollment', activeName)
    },
    changeActiveNameOfCourse (context, activeName) {
      context.commit('changeActiveNameOfCourse', activeName)
    },
    changeSemesters (context, semesters) {
      context.commit('changeSemesters', semesters)
    },
    changeInfoOfAnAlumni (context, alumniInfo) {
      context.commit('changeInfoOfAnAlumni', alumniInfo)
    },
    changeCurrentSemester (context, semester) {
      context.commit('changeCurrentSemester', semester)
    }
  },
  getters: {
    getActiveIndexOfNavigation (state) {
      return state.activeIndexOfNavigation
    },
    getActiveNameOfEnrollment (state) {
      return state.activeNameOfEnrollment
    },
    getActiveNameOfCourse (state) {
      return state.activeNameOfCourse
    },
    getSemesters (state) {
      return state.semesters
    },
    getInfoOfAnAlumni (state) {
      return state.infoOfAnAlumni
    },
    getCurrentSemester (state) {
      return state.currentSemester
    }
  },
  modules: {
  }
})
