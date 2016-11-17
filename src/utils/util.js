import { getIsApp } from './localstorage_api'

// toast方法的timeout标志
let tipTimeOut = null

// 将vue对象转换为原生js对象的方法
export function toNativeObject (obj) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch (e) {
    return obj
  }
}

// 通用的toast方法,用于页面信息提示
export function toast (text, second) {
  let tipID = document.getElementById('tipID')
  if (!tipID) {
    tipID = document.createElement('div')
    tipID.setAttribute('id', 'tipID')
    tipID.style.cssText = 'padding:5px 10px;border-radius:5px;position:fixed;left:50%;max-width:90%;top:33%;margin-top:-20px;background:rgba(0,0,0,0.8);text-align:center;color:#fff;z-index:99999999;'
    document.getElementsByTagName('body')[0].appendChild(tipID)
  }
  tipID.style['left'] = 0
  tipID.innerHTML = text
  tipID.style.display = 'block'
  tipID.style['margin-left'] = -(tipID.clientWidth / 2) + 'px'
  tipID.style['left'] = '50%'
  tipTimeOut && clearTimeout(tipTimeOut)
  tipTimeOut = setTimeout(function () {
    tipID.style.display = 'none'
  }, (second || 3) * 1000)
}

// 将数字转化为金额的字符串格式
export function numFormatToStr (num) {
  num = num || 0
  let negative = false
  if (num === 0) {
    return 0
  }
  if (num < 0) {
    num *= -1
    negative = true
  }
  if (num) {
    let x1 = window.parseInt(num).toString()
    let len = x1.length
    let x2 = num.toString().slice(len)
    if (len <= 3) {
      return negative ? '-' + x1 + x2 : x1 + x2
    }
    let r = len % 3
    let b = x1.slice(r, len).match(/\d{3}/g).join(',')
    x1 = r > 0 ? x1.slice(0, r) + ',' + b : b
    let x = negative ? '-' + x1 + x2 : x1 + x2
    return x
  } else {
    return 0
  }
}

// 获取url query参数的通用方法
export function getQueryParam (param) {
  let result
  if (!param) {
    return result
  }
  let href = window.location.href
  let searchIndex = href.indexOf('?')
  let search = ''
  let searchArr = []
  let temp = []
  if (searchIndex !== -1) {
    search = href.substr(searchIndex + 1)
    searchArr = search.split('&')
    searchArr.forEach((str) => {
      temp = str.split('=')
      if (temp[0] === param) {
        result = decodeURIComponent(temp[1])
      }
    })
  }
  return result
}

export function isArray (arr) {
  return isType(arr, 'Array')
}

export function isObject (obj) {
  return isType(obj, 'Object')
}

export function isFunction (fn) {
  return isType(fn, 'Function')
}

export function isEmpty (obj) {
  if (!obj) {
    return true
  }
  if (isArray(obj) && obj.length === 0) {
    return true
  }
  if (isObject(obj) && Object.keys(obj).length === 0) {
    return true
  }
  return false
}

export function isType (obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}

// 是否在考拉native app 内打开 h5 应用
export function isApp () {
  return getQueryParam('klg_from') === 'kllc' || getIsApp()
}

// 通用加载js文件方法
export function loadJs (url, completedCb, location) {
  if (!isFunction(completedCb)) {
    completedCb = function () {}
  }
  location = location || document.body
  let scriptTag = document.createElement('script')
  scriptTag.src = url
  scriptTag.onload = function () {
    completedCb(null, url)
  }
  scriptTag.onerror = function () {
    completedCb('load script error', url)
  }
  location.appendChild(scriptTag)
}

// 深度合并对象
export function mergeDeep (target, source) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return target
}

