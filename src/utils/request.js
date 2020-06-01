import axios from 'axios'
import jsonBigint from 'json-bigint'

import store from '../store/index.js'

import router from '../router/index.js'

const instance = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn',
  transformResponse: [function (data) {
    try {
      return jsonBigint.parse(data)
    } catch (e) {
      return data
    }
  }
  ]
})

instance.interceptors.request.use(function (config) {
  if (store.state.user.token) {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  } return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  try {
    return response.data.data
  } catch (e) {
    return response.data
  }
}, function (error) {
  if (error.response.status === 401) {
    router.push('/login')
    return new Promise(function () {})
  }

  return Promise.reject(error)
})

export default instance
