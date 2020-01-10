<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3">
          <h3>已有管理员列表</h3>
        </el-col>
          <el-col :span="2">
            <router-link to="/add-administrator">
              <el-button type="primary" size="mini" class="el-icon-plus" circle=""></el-button>
            </router-link>
          </el-col>
      </el-row>
    </el-header>
    <el-row>
      <el-main>
        <el-table
          :data="tableData"
          :highlight-current-row="true"
          :fit="true"
          id="table-center"
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
            label="招生管理权限"
            align="center"
            :width="permissionWidth">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.privilege.enrollment"
                :disabled="scope.row.privilege.super===1"
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
                :disabled="scope.row.privilege.super===1"
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
                :disabled="scope.row.privilege.super===1"
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
                :disabled="scope.row.privilege.super===1"
                :active-color="permissionActiveColor">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            :width="operationWidth">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="small"
                icon="el-icon-check"
                @click="saveInfo(scope.row)"
                :disabled="scope.row.privilege.super===1"
                circle>
              </el-button>
              <el-button
                type="danger"
                size="small"
                icon="el-icon-delete"
                @click="deleteManager(scope.row, scope.$index)"
                :disabled="scope.row.privilege.super===1"
                circle>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-row>
    <el-row type="flex" justify="center">
      <el-pagination
        @current-change="CurrentPageChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'AuthorityManagementPage',
  data () {
    return {
      permissionWidth: 200,
      infoWidth: 145,
      operationWidth: 142,
      permissionActiveColor: '#13ce66',
      pageSize: 10,
      currentPage: 1,
      total: 0,
      tableData: [
        {
          name: '',
          account: '',
          identity: '',
          privilege: {
            enrollment: 0,
            semester: 0,
            activity: 0,
            student: 0
          }
        }
      ]
    }
  },
  created () {
    let that = this
    if (that.axios) {
      that.getManagers()
    }
  },
  methods: {
    getManagers: function () {
      let that = this
      that.axios.get('/administrator/administrator', {
        params: {
          page: that.currentPage,
          page_size: that.pageSize
        }
      }).then(function (response) {
        if (response.data.code === '2000') {
          let administrators = response.data.data.results
          for (let i = 0; i < administrators.length; i++) {
            administrators[i].privilege.enrollment = administrators[i].privilege.enrollment === 1
            administrators[i].privilege.semester = administrators[i].privilege.semester === 1
            administrators[i].privilege.activity = administrators[i].privilege.activity === 1
            administrators[i].privilege.student = administrators[i].privilege.student === 1
          }
          that.total = response.data.data.count
          that.tableData = administrators
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    deleteManager (administrator, index) {
      let that = this
      let url = '/administrator/administrator/' + administrator.id
      that.axios.delete(url
      ).then(function (response) {
        if (response.data.code === '2000') {
          that.tableData.splice(index, 1)
          that.$message({
            type: 'success',
            message: '删除成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    saveInfo (administrator) {
      let that = this
      let url = '/administrator/administrator/' + administrator.id
      that.axios.put(url, {
        name: administrator.name,
        privilege: {
          enrollment: administrator.privilege.enrollment,
          semester: administrator.privilege.semester,
          activity: administrator.privilege.activity,
          student: administrator.privilege.student
        }
      }).then(function (response) {
        console.log(response)
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '修改成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    CurrentPageChange: function (currentPage) {
      let that = this
      that.currentPage = currentPage
      that.getManagers()
    }
  }
}
</script>

<style scoped>
  .el-main {
    padding: 0;
    margin: 0;
  }

  .el-header {
    padding: 0;
    margin: 0;
  }

  h3 {
    color: #707070;
  }
</style>
