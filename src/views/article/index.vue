<template>
  <div class="article">
    <van-nav-bar
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang = "less">

</style>
