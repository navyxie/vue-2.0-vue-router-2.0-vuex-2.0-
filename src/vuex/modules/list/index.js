import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  doubleElevenProductList: [], // 商品列表
  doubleElevenProductDetail: {} // 某个商品的详情
}

export default{
  state,
  actions,
  getters,
  mutations
}
