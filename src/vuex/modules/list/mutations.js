import * as mutationTypes from './mutation-type'
import {setProductList, setProductDetail} from '../../../utils/localstorage_api'

const mutations = {
  [mutationTypes.FETCH_DOUBLE_ELEVEN_PRODUCT_LIST_SUCCESS] (state, data) {
    setProductList(data)
    state.doubleElevenProductList = data
  },
  [mutationTypes.UPDATE_DOUBLE_ELEVEN_PRODUCT_LIST] (state, data) {
    state.doubleElevenProductList = data
  },
  [mutationTypes.UPDATE_DOUBLE_ELEVEN_PRODUCT_DETAIL] (state, data) {
    setProductDetail(data)
    state.doubleElevenProductDetail = data
  }
}
export default mutations
