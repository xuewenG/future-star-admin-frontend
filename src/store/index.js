import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndexOfNavigation: '0',
    activeNameOfCourse: 'first',
    activeNameOfEnrollment: 'first',
    activeNameOfActivity: 'first',
    semesters: '',
    currentSemester: '',
    classes: '',
    currentClass: '',
    courses: '',
    currentCourse: '',
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
    changeActiveNameOfActivity (state, activeName) {
      state.activeNameOfActivity = activeName
    },
    changeSemesters (state, semesters) {
      state.semesters = semesters
    },
    changeInfoOfAnAlumni (state, alumniInfo) {
      state.infoOfAnAlumni = alumniInfo
    },
    changeCurrentSemester (state, semester) {
      state.currentSemester = semester
    },
    changeClasses (state, classes) {
      state.classes = classes
    },
    changeCurrentClass (state, currentClass) {
      state.currentClass = currentClass
    },
    changeCourses (state, courses) {
      state.courses = courses
    },
    changeCurrentCourse (state, currentCourse) {
      state.currentCourse = currentCourse
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
    changeActiveNameOfActivity (context, activeName) {
      context.commit('changeActiveNameOfActivity', activeName)
    },
    changeSemesters (context, semesters) {
      context.commit('changeSemesters', semesters)
    },
    changeInfoOfAnAlumni (context, alumniInfo) {
      context.commit('changeInfoOfAnAlumni', alumniInfo)
    },
    changeCurrentSemester (context, semester) {
      context.commit('changeCurrentSemester', semester)
    },
    changeClasses (context, classes) {
      context.commit('changeClasses', classes)
    },
    changeCurrentClass (context, currentClass) {
      context.commit('changeCurrentClass', currentClass)
    },
    changeCourses (context, courses) {
      context.commit('changeCourses', courses)
    },
    changeCurrentCourse (context, currentCourse) {
      context.commit('changeCurrentCourse', currentCourse)
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
    getActiveNameOfActivity (state) {
      return state.activeNameOfActivity
    },
    getSemesters (state) {
      return state.semesters
    },
    getInfoOfAnAlumni (state) {
      return state.infoOfAnAlumni
    },
    getCurrentSemester (state) {
      return state.currentSemester
    },
    getClasses (state) {
      return state.classes
    },
    getCurrentClass (state) {
      return state.currentClass
    },
    getCourses (state) {
      return state.courses
    },
    getCurrentCourse (state) {
      return state.currentCourse
    }
  },
  modules: {
  }
})
