import * as httpMethod from '../../../http'
import * as mutationTypes from './mutation-type'
import {toast} from '../../../utils/util'

// 产品列表
export const fetchDoubleElevenProductList = ({ commit }) => {
  const url = 'static/dsproductitem.json'
  return httpMethod.getMethod({url}, commit)
    .then((json) => {
      if (Array.isArray(json) && json.length > 0) {
        return commit(mutationTypes.FETCH_DOUBLE_ELEVEN_PRODUCT_LIST_SUCCESS, json)
      }
      return Promise.reject(new Error('双11产品列表没有数据'))
    })
    .catch((error) => {
      toast('api fetchDoubleElevenProductList error: ' + error)
    })
}
// 更新产品列表缓存
export const updateDoubleElevenProductList = ({ commit }, data) => {
  commit(mutationTypes.UPDATE_DOUBLE_ELEVEN_PRODUCT_LIST, data)
}
// 更新产品详情缓存
export const updateDoubleElevenProductDetail = ({ commit }, data) => {
  commit(mutationTypes.UPDATE_DOUBLE_ELEVEN_PRODUCT_DETAIL, data)
}
