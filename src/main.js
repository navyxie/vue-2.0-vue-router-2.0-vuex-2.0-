import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import store from './vuex/index'
import * as filters from './utils/filters'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({routes: routerConfig, mode: 'history'})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
