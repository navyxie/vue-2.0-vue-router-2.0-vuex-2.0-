import { isArray } from './util'

// 格式化商品列表某个商品的数据格式
export function productList (list) {
  let filterProduct = []
  if (isArray(list) && list.length) {
    list.forEach((product, index) => {
      if (isArray(product.prices) && product.prices.length) {
        product.lessBuy = 0
        product.lessPrice = 0
        product.prices.forEach((price) => {
          if (product.lessBuy) {
            if (Number(price.trans_amount) < Number(product.lessBuy)) {
              product.lessBuy = Number(price.trans_amount)
            }
          } else {
            product.lessBuy = Number(price.trans_amount)
          }
          if (product.lessPrice) {
            if (Number(price.price) < Number(product.lessPrice)) {
              product.lessPrice = Number(price.price)
            }
          } else {
            product.lessPrice = Number(price.price)
          }
        })
        filterProduct.push(product)
      }
    })
    return filterProduct
  }
}

// 给定时间戳距离现在时间戳的倒计时
export function countDown (time) {
  return countDownSpace(time - Date.now())
}

// 给定时间戳的范围倒计时
export function countDownSpace (spaceTime) {
  let dayUnitTime = 86400000
  let hourUnitTime = 3600000
  let minuteUnitTime = 60000
  let secondUnitTime = 1000
  let result = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }
  if (spaceTime < 0) {
    return result
  }
  result.day = parseInt(spaceTime / dayUnitTime, 10)
  spaceTime -= result.day * dayUnitTime
  result.hour = parseInt(spaceTime / hourUnitTime, 10)
  spaceTime -= result.hour * hourUnitTime
  result.minute = parseInt(spaceTime / minuteUnitTime, 10)
  spaceTime -= result.minute * minuteUnitTime
  result.second = parseInt(spaceTime / secondUnitTime)
  return result
}

// 返回中文格式的天时分秒
export function countDownZhStr (result) {
  let str = ''
  result.day && (str += result.day + '天')
  result.hour && (str += result.hour + '时')
  result.minute && (str += result.minute + '分')
  result.second && (str += result.second + '秒')
  return str
}

// 给定时间戳距离现在时间戳的中文格式倒计时
export function showCountDownZh (time) {
  return countDownZhStr(countDown(time))
}

// 给定时间戳范围的中文格式倒计时
export function showCountDownSpaceZh (timeSpace) {
  return countDownZhStr(countDownSpace(timeSpace))
}

// 倒计时返回天数
export function showCountDownSpaceDay (timeSpace) {
  return countDownSpace(timeSpace)['day']
}
