import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import globalConstant from '../constant/globalConstant'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = globalConstant.host
axios.defaults.withCredentials = true
