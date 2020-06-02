<template>
 <div class="compopup">
    <van-popup :value="value" @closed="isEdit=false"  closeable  close-icon-position="top-left" @click-overlay="$emit('input',$event)" round position="bottom" :style="{ height: '95%' }" >
    <div class="channel">
      <div class="channel-head">
        <div>
          <span class="title">我的频道</span>
          <span class="desc">点击进入频道</span>
        </div>
        <div>
          <van-button type="danger" plain size="mini" @click="isEdit=!isEdit" round>{{isEdit?'完成':'编辑'}}</van-button>
        </div>
      </div>
      <!--van-grid 没有设置column-num属性，默认是4列-->
      <van-grid class="channel-content" :gutter="10" clickable>
        <van-grid-item @click="clkChannel(item,k)" v-for="(item, k) in proups"  :key="item.id" text="文字">
          <span class="text"  :style="{color:k===popupIndex?'red':''}">{{item.name}}</span>
          <van-icon v-show="k>0&&isEdit" @click="delChannel(item,k)" class="close-icon" name="close" />
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
        <van-grid-item v-for="item in restChannel" @click="restTouser(item)" :key="item.id" text="文字">
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
import { apiChannel, apiChannelAdd, apiChannelDel } from '../../../api/channel.js'
export default {
  name: 'compopup',
  props: ['value', 'proups', 'popupIndex'],
  data () {
    return {
      isClose: true,
      channelAll: [],
      isEdit: false
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
    },
    async restTouser (item) {
      this.proups.push(item)
      await apiChannelAdd(item)
    },
    delChannel (obj, k) {
      this.proups.splice(k, 1)
      apiChannelDel(obj)

      if (k === this.proups.length && k === this.popupIndex) {
        this.$emit('update:popupIndex', k - 1)
      }
    },
    clkChannel (obj, k) {
      if (this.isEdit && k > 0) {
        return this.delChannel(obj, k)
      }

      this.$emit('update:popupIndex', k)
      this.$emit('input', false)
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
