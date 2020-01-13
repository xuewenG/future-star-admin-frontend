<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="班级学员"></el-page-header>
      <el-divider/>
      <el-table
        :data="tableData"
        :highlight-current-row="true"
        :default-sort = "{prop: 'name', order: 'descending'}"
        stripe>
        <el-table-column
          prop="name"
          align="center"
          label="姓名"
          sortable>
        </el-table-column>
        <el-table-column
          prop="gender"
          align="center"
          label="性别"
          sortable>
        </el-table-column>
        <el-table-column
          prop="birthday"
          align="center"
          label="出生日期"
          sortable>
        </el-table-column>
        <el-table-column
          prop="phone_number"
          align="center"
          label="联系电话"
          sortable>
        </el-table-column>
        <el-table-column
          prop="wx"
          align="center"
          label="微信号">
        </el-table-column>
        <el-table-column
          prop="email"
          align="center"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="所在城市"
          sortable>
        </el-table-column>
        <el-table-column
          align="center"
          label="详情">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="showAllInformation(scope.row)"
              round>
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="currentPageChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'StudentInClass',
  data () {
    return {
      shortTextWidth: 100,
      longTextWidth: 180,
      operationWidth: 130,
      currentClass: '',
      pageSize: 10,
      currentPage: 1,
      total: 0,
      tableData: []
    }
  },
  created () {
    this.getStudents()
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    getStudents: function () {
      let that = this
      that.currentClass = that.$store.getters.getCurrentClass
      that.axios.get('/student/student', {
        params: {
          page: that.currentPage,
          page_size: that.page_size,
          clazz_id: that.currentClass.id
        }
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.tableData = response.data.data.results
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].gender === 0) {
              that.tableData[i].gender = '男'
            } else {
              that.tableData[i].gender = '女'
            }
          }
          that.total = response.data.data.count
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    currentPageChange: function (currentPage) {
      let that = this
      that.currentPage = currentPage
      that.getStudents()
    },
    showAllInformation: async function (student) {
      await this.$store.dispatch('changeInfoOfAnAlumni', student)
      await this.$router.push('/show-student-information')
    }
  }
}
</script>

<style scoped>
</style>
