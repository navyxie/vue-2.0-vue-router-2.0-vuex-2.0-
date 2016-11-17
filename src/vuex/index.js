import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import list from './modules/list'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  loading: false // 全局加载loading,右上角
}

export default new Vuex.Store({
  modules: {
    list
  },
  state,
  actions,
  getters,
  mutations,
  strict: debug
})
