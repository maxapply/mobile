<template>
  <div class="container">
    <van-tabs v-model="activeChannelIndex">
      <van-tab  :title="item.name" v-for="item in list" :key="item.id">
        <com-article :articleID="item.id"></com-article>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import comArticle from './components/com-article.vue'
import { getChannelsList } from '../../api/channel.js'
export default {
  name: 'home-index',
  components: {
    comArticle
  },
  data () {
    return {
      activeChannelIndex: 0,
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await getChannelsList()
      this.list = res.channels
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
}
</style>
