import vue from 'vue'
import {API_ROOT} from './config'
import * as mutationTypes from './vuex/mutation-type'

export const getMethod = ({ url, query }, commit) => {
  if (commit) commit(mutationTypes.START_LOADING)
  let _url
  if (query) {
    _url = API_ROOT + `${url}?${query}`
  } else {
    _url = API_ROOT + `${url}`
  }

  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit(mutationTypes.FINISH_LOADING)
      if ((res.status >= 200 && res.status < 300) || res.status === 304) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    }, (res) => {
      if (commit) commit(mutationTypes.FINISH_LOADING)
      return Promise.reject(new Error(res.status))
    })
}

export const postMethod = ({ url, body }, commit) => {
  if (commit) commit(mutationTypes.START_LOADING)
  url = API_ROOT + `${url}`

  return vue.http.post(url, body)
    .then((res) => {
      if (commit) commit(mutationTypes.FINISH_LOADING)
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    }, (res) => {
      if (commit) commit(mutationTypes.FINISH_LOADING)
      return Promise.reject(new Error(res.status))
    })
}
