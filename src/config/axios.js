import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'querystring'
import globalConstant from '../constant/globalConstant'

axios.defaults.baseURL = globalConstant.host
axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)

Vue.prototype.$qs = qs
