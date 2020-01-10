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
          shadow="never">
          <el-form label-width="90px" label-position="top" ref="form"
            :status-icon="true" :model="form" :rules="rules"
            :hide-required-asterisk="true">
            <el-form-item label="账号" prop="account">
              <el-input type="text" v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                  <el-button type="primary" @click="submitForm('form')" class="login-button">登录</el-button>
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
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '密码不为空', trigger: ['blur', 'change'] }
        ]
      },
      logoSrc: require('../assets/EdStarsLogo.jpg')
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login: function () {
      let that = this
      that.axios.post('/administrator/login', that.$qs.stringify({
        account: that.form.account,
        password: that.form.password
      })).then(async function (response) {
        if (response.data.code === '2000') {
          await that.$store.dispatch('initializeStateWhileLogin')
          sessionStorage.setItem('user', JSON.stringify(response.data.data))
          await that.$router.push('/home')
        } else {
          that.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '网络繁忙，请稍后重试',
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
    height: 300px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .platform-name {
    font-weight: 300;
    font-size: 24px;
  }

  .login-button {
    width: 260px;
    margin-top: 5px;
    color: #fff;
    background-color: #409eff;
  }

  .el-form-item {
    padding: 0;
    margin-top: 0;
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
