import axios from 'axios'
import {Message} from 'iview'
import {getToken} from '@/utils/auth'
import config from '@/config'
import {removeToken} from './auth'

// const baseUrl = config.httpUrl;
const baseUrl = '/';

// Create an axios instance
const service = axios.create({
  'baseURL': baseUrl, // Api的base_url
  'timeout': 6000000, // Request timeout
  // 'headers': {'Content-Type': 'application/json'},
  // 'transformRequest': [
  //   function (data) {
  //     // Do whatever you want to transform the data
  //     let ret = '';
  //     for (const it in data) {
  //       ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
  //     }
  //     return ret
  //   }
  // ]
});

service.baseURL = baseUrl;

// Request interceptor
service.interceptors.request.use((conf) => {
  // Do something before request is sent
  conf.headers['X-Token'] = getToken()
  return conf
}, (error) => {
  // Do something with request error
  console.log(`error`, error);// For debug
  Promise.reject(error)
})

// Respone interceptor
service.interceptors.response.use(
  (response) => {

    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data

    return response
  },
  (error) => {
    console.log('request got error', error.response)
    const {response} = error
    let errorData = '';
    if (response !== null && response !== '' && typeof response !== 'undefined') {
      errorData = error.response.data
    }
    if (errorData !== null && errorData !== '' && typeof errorData !== 'undefined') {
      const msg = errorData.data;

      if (msg !== null && msg !== '' && typeof msg !== 'undefined') {

        // 接口返回无权限，移除token，跳到登录页
        if (response && response.status === 401) {
          if (msg === '无权限') {
            alert("无访问权限");
          } else {
            Message.error(msg)
          }
          removeToken();
          window.location = '/'
        } else {
          Message.error(msg)
        }

      } else {
        Message.error('请求异常')
      }
    } else {
      Message.error('请求异常')
    }


    return Promise.reject(error)
  }
)

export default service
