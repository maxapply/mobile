<template>
 <div class="compopup">
    <van-popup :value="value"  closeable  close-icon-position="top-left" @click-overlay="$emit('input',$event)" round position="bottom" :style="{ height: '95%' }" >
    <div class="channel">
      <div class="channel-head">
        <div>
          <span class="title">我的频道</span>
          <span class="desc">点击进入频道</span>
        </div>
        <div>
          <van-button type="danger" plain size="mini" round>编辑</van-button>
        </div>
      </div>
      <!--van-grid 没有设置column-num属性，默认是4列-->
      <van-grid class="channel-content" :gutter="10" clickable>
        <van-grid-item v-for="(item, k) in proups" :key="item.id" text="文字">
          <span class="text" :style="{color:k===popupIndex?'red':''}">{{item.name}}</span>
          <!-- <van-icon class="close-icon" name="close" /> -->
        </van-grid-item>
      </van-grid>
    </div>

    <div class="channel">
      <div class="channel-head">
        <div>
          <span class="title">频道推荐</span>
          <span class="desc">点击添加频道</span>
        </div>
      </div>
      <van-grid class="channel-content" :gutter="10" clickable>
        <van-grid-item v-for="item in restChannel" :key="item.id" text="文字">
          <div class="info">
            <span class="text" >{{item.name}}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    </van-popup>
 </div>
</template>

<script>
import { apiChannel } from '../../../api/channel.js'
export default {
  name: 'compopup',
  props: ['value', 'proups', 'popupIndex'],
  data () {
    return {
      isClose: true,
      channelAll: []
    }
  },
  computed: {
    restChannel () {
      const userChannelIDs = this.proups.map(item => {
        return item.id
      })

      const rest = this.channelAll.filter(item => {
        return !userChannelIDs.includes(item.id)
      })
      return rest
    }
  },
  created () {
    this.getChannel()
  },
  methods: {
    async getChannel () {
      const res = await apiChannel()
      this.channelAll = res.channels
    }
  }
}
</script>

<style lang="less" scoped>
.channel {
  margin-top:70px;
  .channel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .title {
      font-size: 30px;
      margin-right: 5px;
    }
    .desc {
      font-size: 16px;
      color:gray;
    }
  }
  .channel-content {
    .text {
      font-size: 16px;
    }
    .active {
      color: red;
    }
    .close-icon {
      font-size: 20px;
      position: absolute;
      top: -5px;
      right: -5px;
      z-index: 999;
      background-color: #fff;
    }
    .info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
