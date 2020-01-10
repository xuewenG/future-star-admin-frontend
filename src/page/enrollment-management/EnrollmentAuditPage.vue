<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="报名审核"></el-page-header>
      <el-divider></el-divider>
      <el-table
        :data="tableData"
        :highlight-current-row="true"
        stripe>
        <el-table-column
          prop="student.name"
          align="center"
          label="姓名"
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.gender"
          align="center"
          label="性别"
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.birthday"
          align="center"
          label="出生日期"
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.phone_number"
          align="center"
          label="联系电话"
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.wx"
          align="center"
          label="微信号"
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.email"
          align="center"
          label="邮箱"
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.city"
          align="center"
          label="所在城市"
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="evaluation.fraction"
          align="center"
          label="分数"
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="small"
              icon="el-icon-check"
              @click="showAllInformation(scope.row)"
              circle>
            </el-button>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInformation(scope.row)"
              circle>
            </el-button>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-s-comment"
              @click="evaluateStudent(scope.row)"
              circle>
            </el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-close"
              @click="showAllInformation(scope.row)"
              circle>
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
  name: 'EnrollmentAuditPage',
  data () {
    return {
      shortTextWidth: 100,
      longTextWidth: 180,
      operationWidth: 210,
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
      that.axios.get('/clazz/student', {
        params: {
          page: that.currentPage,
          page_size: that.page_size,
          clazz_id: that.currentClass.id,
          clazz_student_state: 0
        }
      }).then(function (response) {
        if (response.data.code === '2000') {
          console.log(response)
          that.tableData = response.data.data.results
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].student.gender === 0) {
              that.tableData[i].student.gender = '男'
            } else {
              that.tableData[i].student.gender = '女'
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
    showAllInformation: async function (applyInformation) {
      await this.$store.dispatch('changeInfoOfAnAlumni', applyInformation.student)
      await this.$router.push('/show-student-information')
    },
    evaluateStudent: async function (applyInformation) {
      await this.$store.dispatch('changeCurrentApplyInformation', applyInformation)
      await this.$router.push('/evaluate-student')
    }
  }
}
</script>

<style scoped>
  .search-input {
    display: inline-block;
    width: 350px;
    margin-right: 20px;
  }

  .pagination {
    margin-left: 250px;
  }

  .el-main {
    margin: 0 auto;
  }
</style>
