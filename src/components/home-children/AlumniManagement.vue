<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="4" :offset="3">
          <el-select class="selection" v-model="semester" @change="findAllClass()" filterable placeholder="请选择学期">
            <el-option
              v-for="semesters in semesterOptions"
              :key="semesters.id"
              :label="semesters.label"
              :value="semesters.semester">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select class="selection" v-model="clazz" :disabled="class_state" @change="search()" filterable placeholder="请选择班级">
            <el-option
              v-for="classes in clazzOptions"
              :key="classes.clazz"
              :label="classes.label"
              :value="classes.clazz">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input class='search-input' v-model="keyword" @change="search()" placeholder="请输入姓名"/>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" icon="el-icon-search" @click="search()" round>搜索</el-button>
        </el-col>
      </el-row>
      <el-divider/>
      <el-table
        :data="tableData"
        v-loading="loading"
        stripe
        class="info-table">
        <el-table-column
          prop="name"
          align="center"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="gender"
          align="center"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="birthday"
          align="center"
          label="出生日期">
        </el-table-column>
        <el-table-column
          prop="phone_number"
          align="center"
          label="联系电话">
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
          label="所在城市">
        </el-table-column>
        <el-table-column
          align="center"
          label="全部信息">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="showAllInfo(scope.row)"
              round>
              详情
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              @click="deleteAlumni(scope.row, scope.$index)"
              round>
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        :current-page="currentAlumniPage"
        layout="prev, pager, next"
        :page-count="totalPage">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'AlumniManagementPage',
  data () {
    return {
      currentAlumniPage: 1,
      currentSemesterPage: 1,
      currentClassPage: 1,
      totalPage: 1,
      page_size: 20,
      class_state: true,
      loading: true,
      keyword: null,
      clazz: null,
      semester: null,
      tableData: [],
      semesterOptions: [],
      clazzOptions: []
    }
  },
  created () {
    let that = this
    if (that.axios) {
      that.findAllAlumni()
      that.findAllSemester()
    }
  },
  methods: {
    findAllAlumni () {
      let that = this
      let params = {
        page_size: that.page_size,
        page: that.currentAlumniPage
      }
      that.axios.get('/student/student', { params }).then((response) => {
        if (response.data.code === '2000') {
          that.tableData = response.data.data.results
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].gender === 0) {
              that.tableData[i].gender = '男'
            } else {
              that.tableData[i].gender = '女'
            }
          }
          that.loading = false
          that.$forceUpdate()
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍候重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍候重试',
          duration: 2000
        })
      })
    },
    findAllSemester () {
      let that = this
      let params = {
        page_size: that.page_size,
        page: that.currentSemesterPage
      }
      that.axios.get('/semester/semester', { params }).then(function (response) {
        if (response.data.code === '2000') {
          let results = response.data.data.results
          that.semesterOptions[0] = {
            semester: null,
            label: '全部学期',
            id: 0
          }
          for (let i = 1; i < results.length + 1; i++) {
            that.semesterOptions[i] = {
              semester: results[i - 1]['period_semester'],
              label: results[i - 1]['subject'],
              id: results[i - 1]['id']
            }
          }
          that.$forceUpdate()
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍候重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍候重试',
          duration: 2000
        })
      })
    },
    findAllClass () {
      let that = this
      that.clazzOptions = []
      that.clazz = null
      if (that.semester === null) {
        that.class_state = true
      } else {
        that.class_state = false
      }
      let params = {
        page_size: that.page_size,
        page: that.currentClassPage,
        semester_id: that.semester
      }
      that.axios.get('/clazz/clazz', { params }).then(function (response) {
        if (response.data.code === '2000') {
          let results = response.data.data.results
          for (let i = 0; i < results.length; i++) {
            that.clazzOptions[i] = {
              clazz: results[i]['id'],
              label: results[i]['name']
            }
          }
          that.search()
          that.$forceUpdate()
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍候重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍候重试',
          duration: 2000
        })
      })
    },
    search () {
      let that = this
      let params = {
        page_size: that.page_size,
        page: that.currentAlumniPage,
        name: that.keyword,
        semester_id: that.semester,
        clazz_id: that.clazz
      }
      that.axios.get('/student/student', { params }).then((response) => {
        that.tableData = response.data.data.results
        for (let i = 0; i < that.tableData.length; i++) {
          if (that.tableData[i].gender === 0) {
            that.tableData[i].gender = '男'
          } else {
            that.tableData[i].gender = '女'
          }
        }
        that.loading = false
        that.$forceUpdate()
      })
    },
    handleCurrentChange (currentAlumniPage) {
      this.currentAlumniPage = currentAlumniPage
      this.findAllAlumni()
    },
    deleteAlumni (student, index) {
      let that = this
      let url = '/student/student/' + student.id
      that.axios.delete(url
      ).then((response) => {
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
            message: '服务器繁忙，请稍候重试',
            duration: 2000
          })
        }
      }).catch((error) => {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍候重试',
          duration: 2000
        })
      })
    },
    showAllInfo (alumniInfo) {
      this.$store.dispatch('changeInfoOfAnAlumni', alumniInfo)
      this.$router.push('/show-all-information')
    }
  }
}
</script>

<style scoped>
  .info-table {
    margin: auto;
  }

  .selection {
    margin-right: 20px;
  }

  .search-input {
    display: inline-block;
  }

  .pagination {
    text-align: center;
  }
</style>
