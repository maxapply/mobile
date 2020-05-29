<template>
  <div class="chat">
    <van-nav-bar
      fixed
      title="小智同学"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang = "less">

</style>
