<template>
  <el-container>
    <el-main>
      <el-card
        class="login-card"
        shadow="always">
        <el-row type="flex" justify="center" class="hint">
          <el-col :span="4">
            <img src="../assets/EdStarsLogo.jpg" class="logo"/>
          </el-col>
          <el-col :span="8" class="login-hint">
            管理人员登录平台
          </el-col>
        </el-row>
        <el-form label-width="90px">
          <el-form-item label="请输入账号:">
              <el-input type="text" v-model="username" autofocus="autofocus" class="input-text"/>
            </el-form-item>
          <el-form-item label="请输入密码:">
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
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$axios.post('/administrator/login', this.$qs.stringify({
        account: this.username,
        password: this.password
      })).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped type="type/css">
  .el-container {
    height: 600px;
    background-image: url('../assets/tileBackground1.jpg');
    background-repeat: repeat-x;
  }

  .hint {
    margin-top: 5px;
  }

  .login-hint {
    margin-top: 15px;
    margin-left: 15px;
  }

  .logo {
    width: 66px;
    height: 60px;
  }

  .login-card {
    width: 38%;
    padding: 0;
    margin: 90px auto 80px;
  }

  .input-text {
    width: 300px;
    margin-left: 5px;
  }

  .login-button {
    width: 150px;
  }
</style>
