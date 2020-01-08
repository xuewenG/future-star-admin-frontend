<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center">
        <el-image :src="logoSrc" alt="未来之星" class="logo"></el-image>
      </el-row>
    </el-header>
    <el-divider></el-divider>
    <el-main>
      <el-row type="flex" justify="center">
          <span class="platform-name">未来之星管理平台</span>
      </el-row>
      <el-row type="flex" justify="center">
        <el-card
          class="login-card"
          shadow="always">
          <el-form label-width="90px" label-position="top">
            <el-form-item label="账号">
              <el-input type="text" v-model="account" autofocus="autofocus"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="17">
                  <el-checkbox v-model="remember" label="记住账号"></el-checkbox>
              </el-col>
              <el-col :span="7">
                <router-link to="/login" class="forget-password">
                  忘记密码？
                </router-link>
              </el-col>
            </el-row>
            <el-form-item>
              <el-row>
                  <el-button type="success" @click="login()" class="login-button">登录</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-row>
    </el-main>
    <el-divider></el-divider>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-col :span="4" class="hint-footer">
          @copyright coo studio 2019
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      account: '',
      password: '',
      logoSrc: require('../assets/EdStarsLogo.jpg'),
      remember: false
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
  .el-header {
    margin: 28px;
  }

  .logo {
    width: 80px;
    height: 80px;
  }

  .login-card {
    width: 300px;
    height: 280px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .platform-name {
    font-weight: 300;
    font-size: 24px;
  }

  .login-button {
    width: 260px;
    color: #fff;
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
    background-color: #28a745;
  }

  .forget-password {
    display: inline-block;
    padding-left: 5px;
    margin: 0;
    font-size: 14px;
    text-decoration: none;
  }

  a:link {
    color: #409eff;
  }

  a:visited {
    color: #409eff;
  }

  a:hover {
    color: #409eff;
  }

  a:active {
    color: #409eff;
  }

  .el-form-item {
    padding: 0;
    margin: 0;
  }

  .hint-footer {
    font-size: 14px;
    color: gray;
  }

  .el-checkbox {
    padding-left: 0;
    font-size: 12px;
  }
</style>
