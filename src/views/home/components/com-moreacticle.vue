<template>
 <div class="moreacticle">
   <van-dialog :value="value" @closed="isOnelevel=true" @input="$emit('input',$event)" :showConfirmButton="false" closeOnClickOverlay>

    <van-cell-group v-if="isOnelevel">
      <van-cell title="不感兴趣" icon="location-o" @click="disLikes" />
      <van-cell title="反馈垃圾内容" @click="isOnelevel=false" icon="location-o"  is-link />
      <van-cell title="拉黑作者" icon="location-o" />
    </van-cell-group>

      <van-cell-group v-else>
      <van-cell  icon="arrow-left" @click="isOnelevel=true" />
      <van-cell title="其他问题" icon="location-o" />
      <van-cell title="标题夸张" icon="location-o"  />
      <van-cell title="低俗色情" icon="location-o" />
      <van-cell title="错别字多" icon="location-o" />
      <van-cell title="旧闻重复" icon="location-o" />
      <van-cell title="广告软文" icon="location-o" />
      <van-cell title="内容不实" icon="location-o" />
      <van-cell title="涉嫌违法犯罪" icon="location-o" />
      <van-cell title="侵权" icon="location-o" />
    </van-cell-group>

   </van-dialog>
 </div>
</template>

<script>
import { apiDislikes } from '../../../api/article.js'
export default {
  name: 'moreacticle',
  props: ['value', 'noLikeID'],
  data () {
    return {
      isOnelevel: true
    }
  },
  methods: {
    async disLikes () {
      const res = await apiDislikes(this.noLikeID)
      this.$emit('input')
      console.log(res)
    }
  }
}
</script>

<style scoped lang = "less">

</style>
