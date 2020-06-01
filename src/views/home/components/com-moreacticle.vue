<template>
 <div class="   ">
   <van-dialog :value="value" @closed="isOnelevel=true" @input="$emit('input',$event)" :showConfirmButton="false" closeOnClickOverlay>

    <van-cell-group v-if="isOnelevel">
      <van-cell title="不感兴趣" icon="location-o" @click="disLikes" />
      <van-cell title="反馈垃圾内容" @click="isOnelevel=false" icon="location-o"  is-link />
      <van-cell title="拉黑作者" icon="location-o" />
    </van-cell-group>

      <van-cell-group v-else>
      <van-cell   icon="arrow-left" @click="isOnelevel=true" />
      <van-cell v-for="item in reportList" @click="report(item.value)" :key="item.value" :title="item.title" icon="location-o" />
      <!-- <van-cell title="标题夸张" icon="location-o"  />
      <van-cell title="低俗色情" icon="location-o" />
      <van-cell title="错别字多" icon="location-o" />
      <van-cell title="旧闻重复" icon="location-o" />
      <van-cell title="广告软文" icon="location-o" />
      <van-cell title="内容不实" icon="location-o" />
      <van-cell title="涉嫌违法犯罪" icon="location-o" />
      <van-cell title="侵权" icon="location-o" /> -->
    </van-cell-group>

   </van-dialog>
 </div>
</template>

<script>
import { apiDislikes, apiReports } from '../../../api/article.js'
export default {
  name: 'moreacticle',
  props: ['value', 'noLikeID'],
  data () {
    return {
      reportList: [
        { title: '其他问题', value: 0 },
        { title: '标题夸张', value: 1 },
        { title: '低俗色情', value: 2 },
        { title: '错别字多', value: 3 },
        { title: '旧闻重复', value: 4 },
        { title: '广告软文', value: 5 },
        { title: '内容不实', value: 6 },
        { title: '涉嫌违法犯罪', value: 7 },
        { title: '侵权', value: 8 }
      ],
      isOnelevel: true
    }
  },
  methods: {
    async disLikes () {
      try {
        await apiDislikes(this.noLikeID)
        this.$emit('input', false)
        this.$emit('xiaoshi')
        this.$toast.success('操作成功！')
      } catch (e) {
        this.$toast.fail('操作失败！')
      }
    },
    async  report (reportID) {
      try {
        const obj = {
          target: this.noLikeID,
          type: reportID
        }
        await apiReports(obj)
        this.$toast.success('举报成功！')
        this.$emit('input', false)
      } catch (e) {
        if (e.response.status === 409) {
          this.$emit('input', false)
          return this.$toast.fail('已举报过该文章')
        } else {
          this.$toast.fail('操作失败！')
        }
      }
    }
  }
}
</script>

<style scoped lang = "less">

</style>
