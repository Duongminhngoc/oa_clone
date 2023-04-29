import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
Vue.prototype.$http = axios
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Get the token from localStorage
  const token = localStorage.getItem('token')
  
  // Set the Authorization header if the token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
}, function (error) {
  return Promise.reject(error)
})
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
