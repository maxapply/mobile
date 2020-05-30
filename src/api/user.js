import request from '../utils/request.js'

export function apiUserLoin ({ mobile, code }) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: { mobile, code }
  })
}
