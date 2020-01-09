<template>
  <el-container v-if="semester.state===1">
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
        <el-col :span="1">
          <el-button type="primary" size="mini" class="btn" icon="el-icon-more" @click="lookOverSemesterDetail" circle></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main-in-enrollment">
      <el-tabs v-model="activeName" @tab-click="changeActiveName">
        <el-tab-pane label="未开放" name="first">
          <unopened-classes></unopened-classes>
        </el-tab-pane>
        <el-tab-pane label="招生中" name="second">
          <enrolling-classes></enrolling-classes>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer>
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
    </el-footer>
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
      total: 0
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
      let semesters = response.data.data.results
      console.log(response)
      await that.$store.dispatch('changeSemesters', semesters)
      that.semester = semesters[semesters.length - 1]
    }).catch(function (error) {
      console.log(error)
    })

    that.getClasses()
  },
  methods: {
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
          page: that.page,
          page_size: that.page_size
        }
      }).then(async function (response) {
        let classes = response.data.data.results
        that.total = response.data.data.count
        console.log(response)
        await that.$store.dispatch('changeClasses', classes)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .main-in-enrollment {
    padding: 0;
    margin: 0;
  }

  .el-header {
    padding: 0;
  }

  h3 {
    color: #707070;
  }

  .el-footer {
    padding: 0;
  }
</style>
