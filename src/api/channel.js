import request from '../utils/request.js'
export function getChannelsList () {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'GET'
  })
}
