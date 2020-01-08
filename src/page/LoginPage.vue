<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center">
        <el-image :src="logoSrc" alt="未来之星" class="logo"></el-image>
      </el-row>
    </el-header>
    <el-main>
      <el-card
        class="login-card"
        shadow="always">
        <el-form label-width="90px" label-position="top">
          <el-form-item label="账号">
              <el-input type="text" v-model="account" autofocus="autofocus" class="input-text"/>
            </el-form-item>
          <el-form-item label="密码">
              <el-input type="password" v-model="password" class="input-text"/>
            </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="center">
              <el-col :push="4">
                <el-button type="primary" @click="login()" class="login-button">登录</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      account: '',
      password: '',
      logoSrc: require('../assets/EdStarsLogo.jpg')
    }
  },
  methods: {
    login: function () {
      let that = this
      that.axios.post('/administrator/login', that.$qs.stringify({
        account: that.account,
        password: that.password
      })).then(function (response) {
        if (response.data.code === '2000') {
          sessionStorage.setItem('user', JSON.stringify(response.data.data))
          that.$router.push('/home')
        } else {
          that.$message({
            type: 'error',
            message: '用户名或密码错误',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器内部错误',
          duration: 2000
        })
      })
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 80px;
    height: 80px;
  }
</style>
