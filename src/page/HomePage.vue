<template>
  <el-container>
    <el-header>
      <el-row justify="center" align="middle" class="hint-info-row">
          <el-col :span="2" :push="1">
            <img src="../assets/EdStarsLogo.jpg" height="50px" />
          </el-col>
          <el-col :span="5" :push="1" class="hint-info">
            <h3>欢迎来到未来之星管理系统</h3>
          </el-col>
          <el-col :span="3" :push="8"  class="hint-info">
            <h3>{{ identityName }}</h3>
          </el-col>
          <el-col :span="2" :push="7"  class="hint-info">
            <h3>，{{ name }}</h3>
          </el-col>
          <el-col :span="2" :push="7"  class="hint-info">
              <el-button type="warning" size="small" round>修改密码</el-button>
          </el-col>
          <el-col :span="2" :push="7"  class="hint-info">
            <el-button type="danger" size="small" @click="signOut" round>账号登出</el-button>
          </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :background-color="backgroundColor"
                 :active-text-color="activeTextColor" :text-color="textColor" align="middle">
          <el-row type="flex" justify="space-around">
            <el-col :span="4">
              <router-link to="/home/enrollment">
                <el-menu-item index="1">招生管理</el-menu-item>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/home/course">
                <el-menu-item index="2">课程管理</el-menu-item>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/home/activity">
                <el-menu-item index="3">活动管理</el-menu-item>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/home/alumni">
                <el-menu-item index="4">校友资料管理</el-menu-item>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/home/authority">
                <el-menu-item index="5">权限管理</el-menu-item>
              </router-link>
            </el-col>
          </el-row>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      textColor: '#0069A0',
      activeTextColor: '#738ab9',
      backgroundColor: '#00ADA9',
      identityName: '',
      name: ''
    }
  },
  created () {
    console.log(localStorage.getItem('user'))
    let user = localStorage.getItem('user')
    this.name = user.name
    this.identityName = user.identityName
  },
  methods: {
    signOut: function () {
      let that = this
      that.$axios.post('/administrator/logout'
      ).then(function (response) {
        if (response.data.code === '2000') {
          localStorage.setItem('user', '')
          that.$router.push('/login')
        } else {
          that.$message({
            type: 'error',
            message: '请求出错',
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
  },
  computed: {
  }
}
</script>

<style scoped>
  .el-header {
    padding: 0;
    margin: 0;
  }

  .el-menu-item {
    font-weight: bold;
    font-size: 20px;
    font-family: 'Microsoft YaHei', Serif;
  }

  a {
    text-decoration: none;
  }

  .widget-in-menu {
    font-family: 'Microsoft YaHei', Serif;
  }

  .hint-info > h3 {
    margin-top: 18px;
  }

  .hint-info > button {
    margin-top: 15px;
  }

  .hint-info-row {
    height: 60px;
    background-color: #f9fafc;
  }
</style>
