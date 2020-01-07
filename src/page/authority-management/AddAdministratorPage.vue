<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack" content="添加管理员"></el-page-header>
    </el-header>
    <el-main>
      <el-table
        :data="administrators"
        stripe>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          :width="infoWidth">
          <template slot-scope="scope">
            <el-input placeholder="请输入姓名" v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="account"
          label="账号"
          :width="infoWidth">
          <template slot-scope="scope">
            <el-input placeholder="请输入账号" v-model="scope.row.account"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          :width="infoWidth">
          <template slot-scope="scope">
            <el-input placeholder="请输入密码" v-model="scope.row.password" show-password></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="招生管理权限"
          align="center"
          :width="permissionWidth">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.privilege.enrollment"
              :active-color="permissionActiveColor">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="课程管理权限"
          align="center"
          :width="permissionWidth">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.privilege.semester"
              :active-color="permissionActiveColor">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="校友活动管理权限"
          align="center"
          :width="permissionWidth">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.privilege.activity"
              :active-color="permissionActiveColor">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="校友资料管理权限"
          align="center"
          :width="permissionWidth">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.privilege.student"
              :active-color="permissionActiveColor">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="addAdministrator(scope.row)" round>提交</el-button>
            <el-button type="plain" size="small" @click="clearText(scope.row)" round>清空</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button type="primary" size="medium" @click="addAll()" round>一键提交</el-button>
        <el-button type="plain" size="medium" @click="clearTextAll()" round>一键清空</el-button>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button type="primary" size="medium" @click="insertInfoArea()" round>继续添加</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'AddAdministrator',
  data () {
    return {
      permissionWidth: 180,
      infoWidth: 160,
      operationWidth: 180,
      permissionActiveColor: '#13ce66',
      administrators: [
        {
          name: '',
          account: '',
          password: '',
          privilege: {
            enrollment: 2,
            semester: 2,
            activity: 2,
            student: 2
          }
        }
      ]
    }
  },
  created () {
    for (let i = 0; i < this.administrators.length; i++) {
      this.administrators[i].privilege.enrollment = this.administrators[i].privilege.enrollment === 1
      this.administrators[i].privilege.semester = this.administrators[i].privilege.semester === 1
      this.administrators[i].privilege.activity = this.administrators[i].privilege.activity === 1
      this.administrators[i].privilege.student = this.administrators[i].privilege.student === 1
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    addAdministrator (administrator) {
      console.log(administrator)
      administrator.privilege.enrollment = administrator.privilege.enrollment ? 1 : 2
      administrator.privilege.semester = administrator.privilege.semester ? 1 : 2
      administrator.privilege.activity = administrator.privilege.activity ? 1 : 2
      administrator.privilege.student = administrator.privilege.student ? 1 : 2
      let that = this
      that.axios.post('/administrator/administrator', {
        name: administrator.name,
        account: administrator.account,
        password: administrator.password,
        privilege: {
          enrollment: administrator.privilege.enrollment,
          semester: administrator.privilege.semester,
          activity: administrator.privilege.activity,
          student: administrator.privilege.student
        }
      }).then(function (response) {
        if (response.data.code === '2000') {
          administrator = {
            name: '',
            account: '',
            password: '',
            privilege: {
              enrollment: 2,
              semester: 2,
              activity: 2,
              student: 2
            }
          }
          that.$message({
            type: 'success',
            message: '添加成功',
            duration: 2000
          })
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
    },
    clearText: function (administrator) {
      administrator.name = ''
      administrator.account = ''
      administrator.password = ''
      administrator.privilege.enrollment = false
      administrator.privilege.semester = false
      administrator.privilege.activity = false
      administrator.privilege.student = false
    },
    clearTextAll: function () {
      this.administrators = [{
        name: '',
        account: '',
        password: '',
        privilege: {
          enrollment: 2,
          semester: 2,
          activity: 2,
          student: 2
        }
      }]
    },
    insertInfoArea: function () {
      this.administrators.push({
        name: '',
        account: '',
        password: '',
        privilege: {
          enrollment: 2,
          semester: 2,
          activity: 2,
          student: 2
        }
      })
    },
    addAll: function () {

    }
  }
}
</script>

<style scoped>

</style>
