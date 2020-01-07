import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/axios'
import './config/element-ui'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const whiteList = ['/login']
  if (whiteList.indexOf(to.path) < 0) {
    let userInfo = JSON.parse(sessionStorage.getItem('user'))
    if (userInfo) {
      if (userInfo.name !== undefined) {
        next()
      } else {
        next('/login')
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
