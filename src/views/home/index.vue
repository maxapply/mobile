<template>
  <div class="container">
    <van-tabs v-model="activeChannelIndex">
      <van-tab title="推荐">
      <com-article></com-article>
      </van-tab>

      <van-tab title="标签 2">
        <com-article></com-article>
      </van-tab>
      <van-tab title="标签 3">
        <com-article></com-article>
      </van-tab>
      <van-tab title="标签 4">
        <com-article></com-article>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import comArticle from './components/com-article.vue'
export default {
  name: 'home-index',
  components: {
    comArticle
  },
  data () {
    return {
      activeChannelIndex: 0

    }
  },
  methods: {
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
