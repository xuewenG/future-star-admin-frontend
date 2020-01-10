<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="班级详情"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-row>
          <el-col :span="23">
            班级名称： {{ currentClass.name }}
          </el-col>
          <el-col :span="1">
            <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editClassInfo" circle></el-button>
          </el-col>
        </el-row>
        <el-row class="info">
          起止时间： {{ currentClass.start_time }} ---- {{ currentClass.end_time }}
        </el-row>
        <el-row class="info">
          班级人数： {{ currentClass.current_people_number }} / {{ currentClass.people_number_limit }}
        </el-row>
        <el-row class="info">
          班级介绍： {{ currentClass.introduction }}
        </el-row>
        <el-divider content-position="center">课程详情</el-divider>
        <el-card v-for="course in courses" :key="course.id" shadow="never">
          <el-row>
            <el-col :span="20">
              课程名：{{ course.name }}
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-more" @click="lookOverCourseDetail(course)" circle></el-button>
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editCourseInfo(course)" circle></el-button>
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-document-copy" @click="lookOverSubCourses(course)" circle></el-button>
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-user" @click="lookOverTeachers(course)" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-row type="flex" justify="center">
          <el-button type="primary" @click="addCourse" class="el-icon-plus" circle></el-button>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CourseClassDetailPage',
  data () {
    return {
      currentClass: {
        id: '2',
        name: '素质教育专题班',
        introduction: '这里是一个加了长文本省略号替代的班级介绍',
        start_time: '2019/12/20',
        end_time: '2019/12/21',
        timeRange: ['2019/12/20', '2019/12/21'],
        current_people_number: '0',
        people_number_limit: '15',
        state: 0
      },
      courses: [
        {
          id: '0',
          name: ''
        }
      ]
    }
  },
  created () {
    this.currentClass = this.$store.getters.getCurrentClass
    let that = this
    that.axios.get('/course/course', {
      params: {
        clazz_id: that.currentClass.id,
        page: 1,
        page_size: 999
      }
    }).then(async function (response) {
      if (response.data.code === '2000') {
        console.log(response)
        let courses = response.data.data.results
        await that.$store.dispatch('changeCourses', courses)
        that.courses = courses
      } else {
        that.$message({
          type: 'error',
          message: '服务器繁忙'
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    addCourse: async function () {
      await this.$store.dispatch('changeCurrentClass', this.currentClass)
      await this.$router.push('/add-course')
    },
    lookOverCourseDetail: async function (course) {
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/course-detail')
    },
    lookOverSubCourses: async function (course) {
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/sub-course-detail')
    },
    lookOverTeachers: async function (course) {
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/teacher-detail')
    },
    editCourseInfo: async function (course) {
      await this.$store.dispatch('changeCurrentClass', this.currentClass)
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/edit-course-info')
    },
    editClassInfo: async function () {
      await this.$store.dispatch('changeCurrentClass', this.currentClass)
      await this.$router.push('/edit-class-info')
    }
  }
}
</script>

<style scoped>
  .activity-card {
    width: 70%;
    margin: auto;
  }

  .activity-table {
    margin: 40px 20px;
  }

  .el-card {
    margin-bottom: 10px;
  }

  .info {
    margin: 0 0 8px;
  }
</style>
