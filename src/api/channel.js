import request from '../utils/request.js'

import store from '../store/index.js'

// 本地持久化存储频道设置的key(游客 和 登录用户 分别设置)
const CHANNEL_KEY_TRAVEL = 'hm-channel-travel' // 游客key
const CHANNEL_KET_VIP = 'hm-channel-vip' // 登录用户Key

export async function getChannelsList () {
  const key = store.state.user.token ? CHANNEL_KET_VIP : CHANNEL_KEY_TRAVEL
  const channelList = localStorage.getItem(key)
  if (channelList) {
    return { channels: JSON.parse(channelList) }
  } else {
    const rst = await request({
      url: '/app/v1_0/user/channels',
      method: 'GET'
    })

    localStorage.setItem(key, JSON.stringify(rst.channels))
    return rst
  }
}

export async function apiChannel () {
  return request({
    url: '/app/v1_0/channels',
    method: 'GET'
  })
}
