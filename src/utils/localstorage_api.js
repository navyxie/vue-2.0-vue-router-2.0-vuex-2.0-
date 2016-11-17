import {save, get} from './localstorage'

let productListKey = 'product-list'
let productDetailKey = 'product-detail'
let productDetailExtendKey = 'product-detail-extend'

// 缓存产品列表信息到本地
export function setProductList (productList) {
  save(productListKey, productList)
}
export function getProductList () {
  return get(productListKey)
}

// 缓存某个产品详情信息到本地
export function setProductDetail (productDetail) {
  save(productDetailKey, productDetail)
}
export function getProductDetail () {
  return get(productDetailKey)
}

// 缓存用户选择某个商品颜色,容量,内存等信息到本地
export function setProductDetailExtend (productDetailExtend) {
  save(productDetailExtendKey, productDetailExtend)
}
export function getProductDetailExtend () {
  return get(productDetailExtendKey)
}
