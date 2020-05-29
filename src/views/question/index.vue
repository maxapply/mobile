<template>
  <div class="question">
    <van-skeleton title  :row="3" />
    <van-skeleton title  :row="3" />
    <van-skeleton title  :row="3" />
  </div>
</template>

<script>
export default {
  name: 'question',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang = "less">
.van-skeleton{
  margin-top: 40px;
}
</style>
