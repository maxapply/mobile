<template>
  <div class="search">
    <van-nav-bar title="搜索中心" left-arrow @click-left="$router.back()" />
     <van-search v-model="q" placeholder="请输入搜索关键词"  @input="getSuggestionList" clearable/>
     <van-cell :title="item" v-for="(item,index) in list" :key="index"  icon="search" />
  </div>
</template>

<script>
import { apiSuggestion } from '../../api/search.js'
export default {
  name: 'search',
  data () {
    return {
      q: '',
      list: []
    }
  },
  created () {
  },
  methods: {
    async getSuggestionList () {
      const res = await apiSuggestion(this.q)
      this.list = res.options
      console.log(res)
    }
  }

}
</script>

<style scoped lang = "less">

</style>
