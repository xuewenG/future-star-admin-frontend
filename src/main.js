import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios';
import VueAxios from 'vue-axios';
import Qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, Axios)
Vue.prototype.$qs = Qs

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
