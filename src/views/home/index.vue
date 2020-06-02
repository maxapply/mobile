<template>
  <div class="container">
    <van-tabs v-model="activeChannelIndex">
        <div slot="nav-right" class="channel-more"  @click="opPopup">
          <van-icon name="wap-nav" />
        </div>
      <van-tab  :title="item.name" v-for="item in list" :key="item.id">
        <com-article :articleID="item.id"></com-article>
      </van-tab>
    </van-tabs>
    <com-popup v-model="isPopup" :proups="list" :popupIndex.sync="activeChannelIndex" ></com-popup>
  </div>
</template>

<script>
import comArticle from './components/com-article.vue'
import { getChannelsList } from '../../api/channel.js'
import ComPopup from './components/com-popup.vue'

export default {
  name: 'home-index',
  components: {
    comArticle,
    ComPopup
  },
  data () {
    return {
      activeChannelIndex: 0,
      list: [],
      isPopup: false

    }
  },
  created () {
    this.getList()
  },

  methods: {
    async getList () {
      const res = await getChannelsList()
      this.list = res.channels
    },
    opPopup () {
      this.isPopup = true
    }

  }

}
</script>

<style  scoped lang='less'>
.van-tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
  /deep/ .van-tabs__content {
    flex: 1;
    overflow: hidden;
  }
  /deep/ .van-tab__pane {
    height: 100%;
  }
  /deep/ .van-tabs__line {
    background-color: #1989fa;
  }
  /*给 更多 频道设置样式*/
   .channel-more{
  position:fixed;
  right:0;
  background-color: white;
  line-height:88px;
  height:88px;
  width: 90px;
  text-align:center;
  font-size:40px;
}
/*频道列表*/

  /deep/ .van-tabs__wrap {
    width: 90%; /*设置频道列表最大宽度，可以避免最后一个频道被按钮覆盖住*/
  }

}
</style>
