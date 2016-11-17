import { KAOLA_ROOT } from '../config'

// 单页应用内通用跳转方法
export function routerHander (context, name, query) {
  context.$router.push({name: name, query: query})
}

// 购买成功后跳转到订单详情页
export function redirectSuc (context, query) {
  routerHander(context, 'ordersuccess', query)
}


