<template>
    <div class="scroll-wrapper" >
      <van-pull-refresh success-duration="1500" :success-text="sucText" v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
        <van-cell v-for="item in articleList" :key="item.art_id.toString()" :title="item.title" >

          <template slot="label">

            <van-grid  :column-num="item.cover.type" v-if="item.cover.type>0" :gutter="10" :border="false">
              <van-grid-item v-for="item2 in item.cover.type" :key="item2" icon="photo-o" text="文字" >
                 <van-image  lazy-load width="85" height="85" :src="item.cover.images[item2-1]" />
              </van-grid-item>
            </van-grid>

           <p>
            <span>作者:{{item.aut_name}}</span>
            &nbsp;
            <span>评论:{{item.comm_count}}</span>
            &nbsp;
            <span>时间:{{item.pubdate|formatTime}}</span>
            <van-icon @click="open(item.art_id.toString())" name="close" />
           </p>
          </template>
        </van-cell>
        </van-list>
      </van-pull-refresh>
     <com-more v-model="isOpen"  @xiaoshi="handleDislikesSuccess()" :noLikeID="disLikeId"></com-more>
    </div>
</template>

<script>
import { apiArticleList } from '../../../api/article.js'
import ComMore from '../components/com-moreacticle.vue'
export default {
  name: 'com-article',
  // props: ['articleID'],
  props: {
    articleID: {
      type: Number,
      required: true
    }
  },
  components: {
    ComMore
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      ts: Date.now(),
      articleList: [],
      isOpen: false,
      disLikeId: '',
      sucText: ''
    }
  },
  created () {
    this.getArticleList()
  },

  methods: {
    async onLoad () {
      await this.$sleep(800)
      const res = await this.getArticleList()

      if (res.results.length > 0) {
        this.articleList.push(...res.results)
        this.ts = res.pre_timestamp
      } else {
        this.finished = true
      }

      this.loading = false
    },
    async onRefresh () {
      await this.$sleep(800)
      const res = await this.getArticleList()
      if (res.results.length > 0) {
        this.articleList.unshift(...res.results)
        this.ts = res.pre_timestamp
        this.sucText = '刷新成功！'
        this.isLoading = false
      } else {
        this.sucText = '已经是最新了！'
      }
    },
    async getArticleList () {
      const article = {
        channel_id: this.articleID,
        timestamp: this.ts
      }
      const res = await apiArticleList(article)
      return res
    },
    open (id) {
      this.disLikeId = id
      this.isOpen = true
    },
    handleDislikesSuccess () {
      const index = this.articleList.findIndex((item) => {
        return item.art_id.toString() === this.disLikeId
      })
      this.articleList.splice(index, 1)
    }

  }
}
</script>

<style scoped lang = "less">
 .scroll-wrapper {
  height: 100%;

  overflow-y: auto;
}

.van-icon {
  float: right;
}
</style>
