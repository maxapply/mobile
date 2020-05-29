<template>
  <div class="video">
  <van-skeleton title avatar :row="3" />
  <van-skeleton title avatar :row="3" />
  <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang = "less">
.van-skeleton {
  margin-top: 30px;
}
</style>
