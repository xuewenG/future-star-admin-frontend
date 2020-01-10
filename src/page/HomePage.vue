<template>
  <el-container>
    <el-header height="45px">
      <el-row justify="center" align="middle" class="hint-info-row">
          <el-col :span="23">
            <el-image :src="logoUrl" fit="fit"></el-image>
          </el-col>
          <el-col :span="1">
            <el-dropdown size="mini" placement="bottom-end" @command="handleCommand">
              <el-col>
                <el-avatar :size="30" :src="avatarUrl"></el-avatar>
                <li class="el-icon-arrow-down"></li>
              </el-col>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-row class="avatar-pop-menu-item">
                    <h3>{{ name }}</h3>
                  </el-row>
                  <el-row class="avatar-pop-menu-item">
                    @{{ account }}
                  </el-row>
                </el-dropdown-item>
                <el-dropdown-item command="b" divided>
                  <el-row class="avatar-pop-menu-item">
                    注销登录
                  </el-row>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
      </el-row>
    </el-header>
    <el-divider></el-divider>
    <el-container>
      <el-aside width="202px">
        <el-menu :background-color="backgroundColor" :active-text-color="activeTextColor"
                 :text-color="textColor" align="middle" :default-active="defaultActive"
                 @select="changeDefaultActive" router>
              <el-menu-item index="1" :disabled="user.privilege.enrollment!==1"
                route="/home/enrollment">
                <li class="el-icon-coordinate"></li>
                招生管理
              </el-menu-item>
              <el-menu-item index="2" :disabled="user.privilege.semester!==1"
                route="/home/course">
                <li class="el-icon-document"></li>
                班级管理
              </el-menu-item>
              <el-menu-item index="3" :disabled="user.privilege.activity!==1"
                route="/home/activity">
                <li class="el-icon-sunny"></li>
                活动管理
              </el-menu-item>
              <el-menu-item index="4" :disabled="user.privilege.student!==1"
                route="/home/alumni">
                <li class="el-icon-user"></li>
                校友管理
              </el-menu-item>
              <el-menu-item index="5" :disabled="user.privilege.super!==1"
                route="/home/authority">
                <li class="el-icon-key"></li>
                权限管理
              </el-menu-item>
        </el-menu>
      </el-aside>
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
      user: {
        privilege: {
          enrollment: '',
          semester: '',
          activity: '',
          student: '',
          super: ''
        }
      },
      textColor: '#707070',
      activeTextColor: '#409eff',
      backgroundColor: '#f9fafc',
      defaultActive: '0',
      avatarUrl: require('../assets/avatar.jpg'),
      logoUrl: require('../assets/logo.png'),
      name: '',
      identityName: '',
      account: ''
    }
  },
  created () {
    let that = this
    if (JSON.parse(sessionStorage.getItem('user') !== null)) {
      let user = JSON.parse(sessionStorage.getItem('user'))
      this.user = user
      that.name = user.name
      that.account = user.account
      if (user.privilege.super === 1) {
        that.identityName = '超级管理员'
      } else {
        that.identityName = '管理员'
      }
    }
    that.defaultActive = that.$store.getters.getActiveIndexOfNavigation
  },
  methods: {
    handleCommand (command) {
      if (command === 'b') {
        this.signOut()
      }
    },
    changeDefaultActive: async function (index) {
      let that = this
      await that.$store.dispatch('initializeStateWhileSwitch')
      await that.$store.dispatch('changeActiveIndexOfNavigation', index)
    },
    signOut: function () {
      let that = this
      that.axios.post('/administrator/logout'
      ).then(async function (response) {
        if (response.data.code === '2000') {
          sessionStorage.setItem('user', '')
          await that.$router.push('/login')
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
    background-color: #f9fafc;
  }

  .el-menu-item {
    width: 180px;
    padding: 0;
    margin: 0;
    font-weight: 600;
    font-size: .875rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-align: left;
  }

  .el-menu {
    width: 200px;
    height: 100%;
  }

  .el-aside {
    height: 680px;
    background-color: #f9fafc;
  }

  a {
    text-decoration: none;
  }

  .hint-info-row {
    padding-top: 5px;
  }

  .avatar-pop-menu-item {
    width: 160px;
    height: 40px;
    padding: 10px 12px;
    font-size: .875rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-align: left;
  }

  .el-divider {
    margin: 0;
  }

  .sub-menu-item {
    display: inline-block;
    width: 29px;
  }

  .el-image {
    width: 100px;
    height: 30px;
  }
</style>
