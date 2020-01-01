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
              v-model="scope.row.hasEnrollmentManagementPermission"
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
              v-model="scope.row.hasCourseManagementPermission"
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
              v-model="scope.row.hasActivityManagementPermission"
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
              v-model="scope.row.hasDatumManagementPermission"
              :active-color="permissionActiveColor">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="addAdministrator(row)" round>提交</el-button>
            <el-button type="plain" size="small" @click="clearText(scope.row)" round>清空</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button type="primary" size="medium" round>一键提交</el-button>
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
          name: '王小虎',
          account: 'M123456',
          password: '123456',
          hasEnrollmentManagementPermission: true,
          hasCourseManagementPermission: true,
          hasActivityManagementPermission: true,
          hasDatumManagementPermission: true
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
