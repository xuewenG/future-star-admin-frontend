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
        <el-col :span="5">
          <el-select v-model="semester_id" @change="getClasses">
            <el-option
              v-for="item in semesters"
              :key="item.name"
              :label="item.subject"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" icon="el-icon-more" @click="lookOverSemesterDetail" circle></el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editSemesterInfo" circle></el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" icon="el-icon-plus" @click="addClass" circle></el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="danger" size="mini" icon="el-icon-close" circle></el-button>
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
      semesters: '',
      activeName: 'first',
      semester: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      createNewSemester: false,
      classes: ''
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
        if (semesters.length === 0) {
          that.createNewSemester = true
        }
        await that.$store.dispatch('changeSemesters', semesters)
        that.semester = semesters[semesters.length - 1]
        that.semester_id = that.semester.id
        that.semesters = semesters
        if (that.semester && that.semester.state === 1) {
          that.createNewSemester = true
        }
      } else {
        that.$message({
          type: 'error',
          message: '请求出错',
          duration: 2000
        })
      }
    }).catch(function (error) {
      console.log(error)
      that.$message({
        type: 'error',
        message: '服务器内部错误',
        duration: 2000
      })
    })

    that.getClasses()
  },
  methods: {
    changeCurrentSemester: function () {
      let semesters = this.$store.getters.getSemesters
      for (let i = 0; i < semesters.length; i++) {
        if (this.semester_id === semesters[i].id) {
          this.semester = semesters[i]
        }
      }
    },
    addClass: async function () {
      this.changeCurrentSemester()
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/add-class')
    },
    editSemesterInfo: async function () {
      this.changeCurrentSemester()
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/edit-semester-info')
    },
    lookOverSemesterDetail: async function () {
      this.changeCurrentSemester()
      await this.$store.dispatch('changeCurrentSemester', this.semester)
      await this.$router.push('/semester-detail')
    },
    changeActiveName: async function (tab) {
      await this.$store.dispatch('changeActiveNameOfCourse', tab.name)
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
          semester_id: that.semester_id,
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
            message: '请求出错',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器内部错误',
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
