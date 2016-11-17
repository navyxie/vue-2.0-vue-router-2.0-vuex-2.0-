import * as mutationTypes from './mutation-type'

const mutations = {
  [mutationTypes.START_LOADING] (state) {
    state.loading = true
  },
  [mutationTypes.FINISH_LOADING] (state) {
    state.loading = false
  }
}
export default mutations

