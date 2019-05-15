/**
 * 接口工具
 * Created by xcp on 2018-08-28.
 */

import request from '@/utils/request'
import { getToken } from '@/utils/auth'

function resolve () {
  let result = []
  for (let i = 0; i < arguments.length; i++) {
    const param = arguments[i]
    result.push(param)
  }

  result = result.join('/')
  result = result.replace(/[\\/]+/ig, '/')
  return result
}

const build = {
  'get' (url, param) {
    return request({ url,
      'method': 'get',
      'params': param })
  },
  'post' (url, param) {
    return request({ url,
      'method': 'post',
      'data': param })
  },
  'put' (url, param) {
    return request({ url,
      'method': 'put',
      'data': param })
  },
  'delete' (url, param) {
    return request({ url,
      'method': 'delete',
      'params': param })
  },
  'promise' (request, response, error) {
    return new Promise((resolve, reject) => request.then(response ? (item) => {
      response(item, resolve)
    } : (response) => {
      resolve(response.data)
    }).catch(error ? (item) => {
      error(item, reject)
    } : (error) => {
      reject(error)
    }))
  }
}

export { resolve, build }
