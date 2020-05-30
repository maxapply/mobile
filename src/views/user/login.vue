<template>
  <div class="login">
    <van-nav-bar title="登录"/>
    <van-cell-group>
      <ValidationObserver ref="form">
      <ValidationProvider rules="required|photo" name="手机号"  v-slot="{ errors }">
        <van-field v-model="loginForm.mobile" clearable  :error-message="errors[0] " required label="手机号：" type="text" placeholder="请输入手机号码" />
      </ValidationProvider>
      <ValidationProvider rules="required" name="验证码"  v-slot="{ errors }">
      <van-field v-model="loginForm.code" clearable :error-message="errors[0] " required label="短信验证码：" type="text" placeholder="请输入短信验证码" >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      </ValidationProvider>
      </ValidationObserver>
    </van-cell-group>

      <div class="login_btn">
        <van-button @click="login" :loading="isLoading"  round block type="info" size="small" loading-text="加载中...">登录</van-button>
      </div>
  </div>
</template>

<script>
import { apiUserLoin } from '../../api/user.js'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    async login () {
      const rst = await this.$refs.form.validate()
      if (!rst) {
        return false
      }
      this.isLoading = true

      try {
        const res = await apiUserLoin(this.loginForm)
        this.$store.commit('updataUser', res)
        this.$router.push('/home')
        this.$toast.success('登录成功！')
      } catch (e) {
        this.isLoading = false
        if (e.response.status === 400) {
          return this.$toast.fail('用户名或密码错误' + e)
        }
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang = "less">
.login_btn {
  margin: 40px;
}
</style>
