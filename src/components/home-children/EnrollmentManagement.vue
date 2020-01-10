<template>
  <el-container v-if="createNewSemester">
    <el-header>
      <el-row>
        <h3>暂无进行中学期，点击下方按钮添加新学期</h3>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <router-link to="/add-semester">
          <el-image :src="require('../../assets/addIcon.png')">
          </el-image>
        </router-link>
      </el-row>
    </el-main>
  </el-container>
  <el-container v-else-if="semester.state===0">
    <el-header>
      <el-row type="flex" align="middle">
        <el-col :span="4">
          <h3>{{ semester.subject }}</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" @click="lookOverSemesterDetail" round>学期详情</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" @click="editSemesterInfo" round>编辑信息</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" @click="addClass" round>添加班级</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" size="small" @click="closeSemester" round>关闭学期</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main-contain-class">
      <el-tabs v-model="activeName" @tab-click="changeActiveName">
        <el-tab-pane label="未开放" name="first">
          <unopened-classes :classes="classes"></unopened-classes>
        </el-tab-pane>
        <el-tab-pane label="招生中" name="second">
          <enrolling-classes :classes="classes"></enrolling-classes>
        </el-tab-pane>
      </el-tabs>
      <el-divider></el-divider>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="CurrentPageChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import UnopenedClasses from '../class/ClassesUnopened'
import EnrollingClasses from '../class/ClassesEnrolling'
export default {
  name: 'EnrollmentManagementPage',
  components: {
    UnopenedClasses,
    EnrollingClasses
  },
  data () {
    return {
      activeName: 'first',
      semester: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      createNewSemester: false,
      classes: []
    }
  },
  created () {
    let that = this
    that.activeName = that.$store.getters.getActiveNameOfEnrollment
    that.axios.get('/semester/semester', {
      params: {
        page: 1,
        page_size: 999999
      }
    }).then(async function (response) {
      if (response.data.code === '2000') {
        let semesters = response.data.data.results
        if (semesters.length === 0) {
          that.createNewSemester = true
        }
        await that.$store.dispatch('changeSemesters', semesters)
        that.semester = semesters[0]
        if (that.semester && that.semester.state === 1) {
          that.createNewSemester = true
        }
        that.getClasses()
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
  },
  methods: {
    closeSemester: function () {
      let that = this
      let url = '/semester/semester/' + that.semester.id
      that.axios.put(url, {
        state: 1
      }).then(async function (response) {
        if (response.data.code === '2000') {
          that.semester.state = 1
          await that.$store.dispatch('changeCurrentSemester', that.semester)
          that.createNewSemester = true
          that.$message({
            type: 'success',
            message: '关闭成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '尚有未结束班级',
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
    },
    addClass: async function () {
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/add-class')
    },
    editSemesterInfo: async function () {
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/edit-semester-info')
    },
    lookOverSemesterDetail: async function () {
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/semester-detail')
    },
    changeActiveName: async function (tab) {
      await this.$store.dispatch('changeActiveNameOfEnrollment', tab.name)
    },
    CurrentPageChange: function (currentPage) {
      let that = this
      that.currentPage = currentPage
      that.getClasses()
    },
    getClasses: function () {
      let that = this
      that.axios.get('clazz/clazz', {
        params: {
          semester_id: that.semester.id,
          page: that.currentPage,
          page_size: that.pageSize
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          that.classes = response.data.data.results
          that.total = response.data.data.count
          await that.$store.dispatch('changeClasses', that.classes)
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
    padding: 0;
  }

  .main-contain-class {
    padding: 0;
    margin: 0;
  }

  h3 {
    color: #707070;
  }
</style>
