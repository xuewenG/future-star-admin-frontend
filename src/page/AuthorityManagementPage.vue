<template>
  <el-table
    :data="tableData"
    stripe>
    <el-table-column
      fixed
      prop="name"
      label="姓名"
      :width="infoWidth">
    </el-table-column>
    <el-table-column
      prop="account"
      label="账号"
      :width="infoWidth">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码"
      :width="infoWidth">
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
      fixed="right"
      align="center"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button
          type="danger"
          size="small"
          icon="el-icon-delete"
          @click="deleteManager(scope.$index)"
          circle>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'AuthorityManagementPage',
  data () {
    return {
      permissionWidth: 220,
      infoWidth: 150,
      permissionActiveColor: '#13ce66',
      tableData: [
        {
          name: '王小虎',
          account: 'M123456',
          password: '123456',
          hasEnrollmentManagementPermission: true,
          hasCourseManagementPermission: true,
          hasActivityManagementPermission: true,
          hasDatumManagementPermission: true
        },
        {
          name: '王小龙',
          account: 'M1234567',
          password: '1234567',
          hasEnrollmentManagementPermission: true,
          hasCourseManagementPermission: true,
          hasActivityManagementPermission: true,
          hasDatumManagementPermission: true
        },
        {
          name: '王小龙',
          account: 'M1234567',
          password: '1234567',
          hasEnrollmentManagementPermission: true,
          hasCourseManagementPermission: true,
          hasActivityManagementPermission: true,
          hasDatumManagementPermission: true
        },
        {
          name: '王小龙',
          account: 'M1234567',
          password: '1234567',
          hasEnrollmentManagementPermission: true,
          hasCourseManagementPermission: true,
          hasActivityManagementPermission: true,
          hasDatumManagementPermission: true
        }
      ]
    }
  },
  methods: {
    deleteManager (index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .el-table {
    width: 100%;
  }

</style>
