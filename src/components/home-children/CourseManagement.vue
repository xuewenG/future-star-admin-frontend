<template>
  <el-container>
    <el-header>
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <el-select v-model="semester_id" @change="handleSelectChange">
            <el-option
              v-for="item in semesters"
              :key="item.name"
              :label="item.subject"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col v-if="semester!==''" :span="2">
          <el-button type="primary" size="small" @click="lookOverSemesterDetail" round>学期详情</el-button>
        </el-col>
        <el-col v-show="semester.state===0" :span="2">
          <el-button type="danger" size="small" @click="closeSemester" round>关闭学期</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main-contain-class">
      <el-tabs v-model="activeName" @tab-click="changeActiveName">
        <el-tab-pane label="待开课" name="first">
          <wait-for-start-classes :classes="classes"></wait-for-start-classes>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          <underway-classes :classes="classes"></underway-classes>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          <ended-classes :classes="classes"></ended-classes>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import WaitForStartClasses from '../class/ClassesWaittingForStart'
import UnderwayClasses from '../class/ClassesUnderway'
import EndedClasses from '../class/ClassesEnded'
export default {
  name: 'CourseManagementPage',
  components: {
    WaitForStartClasses,
    UnderwayClasses,
    EndedClasses
  },
  data () {
    return {
      semester_id: '',
      semesters: [],
      activeName: 'first',
      semester: '',
      total: 0,
      classes: []
    }
  },
  created () {
    let that = this
    that.activeName = that.$store.getters.getActiveNameOfCourse
    that.axios.get('/semester/semester', {
      params: {
        page: 1,
        page_size: 999999
      }
    }).then(async function (response) {
      if (response.data.code === '2000') {
        let semesters = response.data.data.results
        await that.$store.dispatch('changeSemesters', semesters)
        that.semester = semesters[0]
        if (that.$store.getters.getActiveSemesterOfCourse === '') {
          that.semester_id = that.semester.id
        } else {
          that.semester_id = that.$store.getters.getActiveSemesterOfCourse
        }
        that.semesters = semesters
        that.getClasses()
      }
    }).catch(function (error) {
      console.log(error)
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
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    handleSelectChange: async function () {
      let that = this
      await that.$store.dispatch('changeActiveSemesterOfCourse', that.semester_id)
      that.changeCurrentSemester()
      await that.$store.dispatch('changeCurrentSemester', this.semester)
      that.getClasses()
    },
    changeCurrentSemester: function () {
      let semesters = this.$store.getters.getSemesters
      for (let i = 0; i < semesters.length; i++) {
        if (this.semester_id === semesters[i].id) {
          this.semester = semesters[i]
        }
      }
    },
    lookOverSemesterDetail: async function () {
      this.changeCurrentSemester()
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/edit-semester-info')
    },
    changeActiveName: async function (tab) {
      await this.$store.dispatch('changeActiveNameOfCourse', tab.name)
    },
    getClasses: function () {
      let that = this
      that.axios.get('clazz/clazz', {
        params: {
          semester_id: that.semester_id,
          page: 1,
          page_size: 999999
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          that.classes = response.data.data.results
          that.total = response.data.data.count
          await that.$store.dispatch('changeClasses', that.classes)
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
  .el-header {
    padding: 0;
  }

  .main-contain-class {
    padding: 1px;
    margin: 0;
  }

  h3 {
    color: #707070;
  }
</style>
