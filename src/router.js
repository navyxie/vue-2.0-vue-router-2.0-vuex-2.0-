import {toast} from './utils/util'
export default [
  // 商品列表页
  {
    path: '/',
    name: 'list',
    component: require('./views/list/list')
  },
  // 商品列表页
  {
    path: '/list',
    name: 'list',
    component: require('./views/list/list')
  },
  // 某个商品详情页
  {
    path: '/detail/:id',
    name: 'detail',
    component: require('./views/detail/detail')
  },
  // 订单确认页
  {
    path: '/order/confirm',
    name: 'orderconfirm',
    beforeEnter: function (from, to, next) {
      toast('这只是demo演示')
    }
  },
  // 404
  {
    path: '*',
    name: 'notFound',
    component: require('./views/not_found/not_found')
  }
]
