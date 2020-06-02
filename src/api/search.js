import request from '../utils/request.js'

export function apiSearchList ({ page, per_page, q }) {
  return request({
    rul: '/app/v1_0/search',
    method: 'GET',
    params: {
      page,
      per_page,
      q
    }
  })
}

export function apiSuggestion (q) {
  return request({
    url: '/app/v1_0/suggestion',
    method: 'GET',
    params: {
      q
    }
  })
}
