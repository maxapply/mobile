import request from '../utils/request.js'

export function apiArticleList ({ channel_id, timestamp }) {
  return request({
    url: '/app/v1_1/articles',
    method: 'GET',
    params: {
      channel_id,
      timestamp,
      with_top: 1
    }
  })
}

export function apiDislikes (articleID) {
  return request({
    url: '/app/v1_0/article/dislikes',
    method: 'POST',
    data: {
      target: articleID
    }
  })
}

export function apiReports ({ target, type }) {
  return request({
    url: '/app/v1_0/article/reports',
    method: 'POST',
    data: {
      target,
      type
    }
  })
}
