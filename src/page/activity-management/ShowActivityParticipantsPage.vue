<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="已参与校友名单"/>
      <!--      <el-divider></el-divider>-->
      <!--      <el-row>-->
      <!--        <el-col :span="4" :offset="3">-->
      <!--          <el-select class="selection" v-model="semester" @change="findAllClass()" filterable placeholder="请选择学期">-->
      <!--            <el-option-->
      <!--              v-for="semesters in semesterOptions"-->
      <!--              :key="semesters.id"-->
      <!--              :label="semesters.label"-->
      <!--              :value="semesters.semester">-->
      <!--            </el-option>-->
      <!--          </el-select>-->
      <!--        </el-col>-->
      <!--        <el-col :span="4">-->
      <!--          <el-select class="selection" v-model="clazz" :disabled="class_state" @change="search()" filterable placeholder="请选择班级">-->
      <!--            <el-option-->
      <!--              v-for="classes in clazzOptions"-->
      <!--              :key="classes.clazz"-->
      <!--              :label="classes.label"-->
      <!--              :value="classes.clazz">-->
      <!--            </el-option>-->
      <!--          </el-select>-->
      <!--        </el-col>-->
      <!--        <el-col :span="6">-->
      <!--          <el-input class='search-input' v-model="keyword" @change="search()" placeholder="请输入搜索内容"/>-->
      <!--        </el-col>-->
      <!--        <el-col :span="4" :offset="1">-->
      <!--          <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>-->
      <!--        </el-col>-->
      <!--      </el-row>-->
      <el-divider></el-divider>
      <el-table
        :data="tableData"
        v-loading="loading"
        stripe>
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
          align="center"
          label="操作">
          <template  slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInfo(scope.row)"
              circle>
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
  name: 'ShowActivityParticipantsPage',
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
      clazzOptions: [],
      currentActivity: []
    }
  },
  created () {
    this.currentActivity = this.$store.getters.getCurrentActivity
    console.log(this.currentActivity)
    if (this.axios) {
      this.findAllAlumni()
      // this.findAllSemester()
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    showAllInfo (alumniInfo) {
      this.$store.dispatch('changeInfoOfAnAlumni', alumniInfo)
      this.$router.push('/show-all-information')
    },
    handleCurrentChange (currentAlumniPage) {
      this.currentAlumniPage = currentAlumniPage
      this.findAllAlumni()
    },
    findAllAlumni () {
      let params = {
        page_size: this.page_size,
        page: this.currentAlumniPage,
        activity_id: this.currentActivity.id
      }
      this.axios.get('/activity/student', { params }).then((response) => {
        if (response.data.code === '2000') {
          this.tableData = response.data.data.results
          for (let i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].gender === 0) {
              this.tableData[i].gender = '男'
            } else {
              this.tableData[i].gender = '女'
            }
          }
          this.loading = false
          this.$forceUpdate()
        } else {
          this.$message({
            type: 'error',
            message: '网络繁忙，请稍候重试',
            duration: 2000
          })
        }
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'error',
          message: '网络繁忙，请稍候重试',
          duration: 2000
        })
      })
    },
    // findAllSemester: function () {
    //   let params = {
    //     page_size: this.page_size,
    //     page: this.currentSemesterPage
    //   }
    //   this.axios.get('/semester/semester', { params }).then((response) => {
    //     if (response.data.code === '2000') {
    //       let results = response.data.data.results
    //       this.semesterOptions[0] = {
    //         semester: null,
    //         label: '全部学期',
    //         id: 0
    //       }
    //       for (let i = 1; i < results.length + 1; i++) {
    //         this.semesterOptions[i] = {
    //           semester: results[i - 1]['period_semester'],
    //           label: results[i - 1]['subject'],
    //           id: results[i - 1]['id']
    //         }
    //       }
    //       this.$forceUpdate()
    //     } else {
    //       this.$message({
    //         type: 'error',
    //         message: '网络繁忙，请稍候重试',
    //         duration: 2000
    //       })
    //     }
    //   }).then((response) => {
    //     console.log(error)
    //     this.$message({
    //       type: 'error',
    //       message: '网络繁忙，请稍候重试',
    //       duration: 2000
    //     })
    //   })
    // },
    // findAllClass: function () {
    //   this.clazzOptions = []
    //   this.clazz = null
    //   if (this.semester === null) {
    //     this.class_state = true
    //   } else {
    //     this.class_state = false
    //   }
    //   let params = {
    //     page_size: this.page_size,
    //     page: this.currentClassPage,
    //     semester_id: this.semester
    //   }
    //   this.axios.get('/clazz/clazz', { params }).then((response) => {
    //     if (response.data.code === '2000') {
    //       let results = response.data.data.results
    //       for (let i = 0; i < results.length; i++) {
    //         this.clazzOptions[i] = {
    //           clazz: results[i]['id'],
    //           label: results[i]['name']
    //         }
    //       }
    //       this.search()
    //       this.$forceUpdate()
    //     } else {
    //       this.$message({
    //         type: 'error',
    //         message: '网络繁忙，请稍候重试',
    //         duration: 2000
    //       })
    //     }
    //   }).then((response) => {
    //     console.log(error)
    //     this.$message({
    //       type: 'error',
    //       message: '网络繁忙，请稍候重试',
    //       duration: 2000
    //     })
    //   })
    // },
    search () {
      let params = {
        page_size: this.page_size,
        page: this.currentAlumniPage,
        name: this.keyword,
        semester_id: this.semester,
        clazz_id: this.clazz
      }
      this.axios.get('/student/student', { params }).then((response) => {
        this.tableData = response.data.data.results
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].gender === 0) {
            this.tableData[i].gender = '男'
          } else {
            this.tableData[i].gender = '女'
          }
        }
        this.loading = false
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style scoped>
  .search-input {
    width: 340px;
    margin-right: 30px;
    margin-left: 130px;
  }

  .pagination {
    text-align: center;
  }
</style>
