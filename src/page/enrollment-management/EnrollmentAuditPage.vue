<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="招生审核"></el-page-header>
      <el-divider></el-divider>
      <el-table
        :data="tableData"
        :highlight-current-row="true"
        :default-sort = "{prop: 'evaluation.fraction', order: 'descending'}"
        stripe>
        <el-table-column
          prop="student.name"
          align="center"
          label="姓名"
          sortable
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.gender"
          align="center"
          label="性别"
          sortable
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.birthday"
          align="center"
          label="出生日期"
          sortable
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.phone_number"
          align="center"
          label="联系电话"
          sortable
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.wx"
          align="center"
          label="微信号"
          sortable
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.email"
          align="center"
          label="邮箱"
          sortable
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="student.city"
          align="center"
          label="所在城市"
          sortable
          :width="longTextWidth">
        </el-table-column>
        <el-table-column
          prop="evaluation.fraction"
          align="center"
          label="分数"
          sortable
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          prop="state"
          align="center"
          label="状态"
          sortable
          :width="shortTextWidth">
        </el-table-column>
        <el-table-column
          align="center"
          label="详情"
          :width="operationWidth">
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
        <el-table-column
          align="center"
          label="评价"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="evaluateStudent(scope.row)"
              round>
              评价
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="审核"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-popover
              :disabled="scope.row.state!=='待审核'"
              trigger="click">
              <el-button
                type="success"
                size="mini"
                @click="pass(scope.row, scope.$index)">
                通过
              </el-button>
              <el-button
                type="danger"
                size="mini"
                @click="pass(scope.row, scope.$index)">
                拒绝
              </el-button>
              <el-button
                type="primary"
                size="mini"
                slot="reference"
                :disabled="scope.row.state!=='待审核'"
                round>
                审核
              </el-button>
            </el-popover>
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
      longTextWidth: 160,
      operationWidth: 80,
      currentClass: '',
      pageSize: 10,
      currentPage: 1,
      total: 0,
      tableData: []
    }
  },
  async created () {
    await this.getStudents()
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    dealWithTableData: function () {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].state === 0) {
          this.tableData[i].state = '待审核'
        } else if (this.tableData[i].state === 1) {
          this.tableData[i].state = '已拒绝'
        } else if (this.tableData[i].state === 2 || this.tableData[i].state === 3 || this.tableData[i].state === 4) {
          this.tableData[i].state = '已通过'
        }
      }
      this.$forceUpdate()
    },
    pass: function (currentApplyInformation, index) {
      let that = this
      let url = '/clazz/student/' + currentApplyInformation.id
      that.axios.put(url, {
        state: 2,
        evaluation: {
          fraction: currentApplyInformation.evaluation.fraction,
          description: currentApplyInformation.evaluation.description
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          that.tableData[index].state = 2
          that.dealWithTableData()
          that.$message({
            type: 'success',
            message: '通过成功',
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
    getStudents: function () {
      let that = this
      that.currentClass = that.$store.getters.getCurrentClass
      that.axios.get('/clazz/student', {
        params: {
          page: that.currentPage,
          page_size: that.page_size,
          clazz_id: that.currentClass.id
        }
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.tableData = response.data.data.results
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].student.gender === 0) {
              that.tableData[i].student.gender = '男'
            } else {
              that.tableData[i].student.gender = '女'
            }
          }
          that.dealWithTableData()
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
    },
    refuse: function (currentApplyInformation, index) {
      let that = this
      let url = '/clazz/student/' + currentApplyInformation.id
      that.axios.put(url, {
        state: 1,
        evaluation: {
          fraction: currentApplyInformation.evaluation.fraction,
          description: currentApplyInformation.evaluation.description
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          that.tableData[index].state = 1
          that.dealWithTableData()
          that.$message({
            type: 'success',
            message: '拒绝成功',
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
    }
  }
}
</script>

<style scoped>
</style>
