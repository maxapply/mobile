<template>
  <div class="login">
    <van-nav-bar title="登录"/>

    <van-cell-group>
      <van-field v-model="loginForm.mobile" clearable  required label="手机号：" type="text" placeholder="请输入手机号码" />
      <van-field v-model="loginForm.code" clearable required label="短信验证码：" type="text" placeholder="请输入短信验证码" >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

      <div class="login_btn">
        <van-button  round block type="info" native-type="submit">登录</van-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang = "less">
.login_btn {
  margin: 40px;
}
</style>
