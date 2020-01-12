<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="班级详情"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never" v-loading="loading">
        <el-row slot="header" >
          <el-col :span="24" align="center">
            <div class="clazz-title"> - {{ currentClass.name }} - </div>
          </el-col>
          <el-col :span="24" align="right">
            <el-button type="primary" size="medium" icon="el-icon-edit-outline" @click="editClassInfo" circle></el-button>
          </el-col>
        </el-row>
        <div class="clazz-introduction">
          <el-row>
            <el-col :span="10" align="center">
              <img :src="currentClass.image" style="width: 320px;">
            </el-col>
            <el-col :span="12" :offset="2">
              <div class="info">
                起止时间： {{ currentClass.start_time }} ---- {{ currentClass.end_time }}
              </div>
              <div class="info">
                班级人数： {{ currentClass.current_people_number }} / {{ currentClass.people_number_limit }}
              </div>
              <div class="info">
                班级介绍： {{ currentClass.introduction }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="course-detail">
          <el-divider content-position="center">
            <h3 class="detail-title">课程详情</h3>
          </el-divider>
        </div>
        <el-card v-for="course in courses" :key="course.id" shadow="never" class="course-card">
          <el-row>
            <el-col :span="2">
              <img :src="course.icon" width="35px">
            </el-col>
            <el-col :span="4">
              {{ course.name }}
            </el-col>
            <el-col :span="9">
              ({{course.sort}})
            </el-col>
            <el-col :span="3">
              <el-button type="primary" size="small" @click="lookOverCourseDetail(course)" round>课程详情</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="primary" size="small" @click="lookOverSubCourses(course)" round>课程目录</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="primary" size="small" @click="lookOverTeachers(course)" round>讲师信息</el-button>
            </el-col>
          </el-row>
        </el-card>
        <el-row type="flex" justify="center" class="add-button">
          <el-button type="primary" size="small" @click="addCourse" round>添加课程</el-button>
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
      currentClass: {},
      courses: [],
      loading: true
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
        let courses = response.data.data.results
        await that.$store.dispatch('changeCourses', courses)
        that.courses = courses
        that.loading = false
      } else {
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试'
        })
      }
    }).catch(function (error) {
      console.log(error)
      that.$message({
        type: 'error',
        message: '服务器繁忙，请稍后重试'
      })
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
      await this.$router.push('/edit-course-info')
    },
    lookOverSubCourses: async function (course) {
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/sub-course-detail')
    },
    lookOverTeachers: async function (course) {
      await this.$store.dispatch('changeCurrentCourse', course)
      await this.$router.push('/edit-teacher-info')

      // await this.$router.push('/teacher-detail')
    },
    editClassInfo: async function () {
      await this.$store.dispatch('changeCurrentClass', this.currentClass)
      await this.$router.push('/edit-class-info')
    },
    uploadImg (f) {
      let param = new FormData()
      let url = '/file/upload'
      param.append('file', f.file)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.axios.post(url, param, config)
        .then(response => {
          f.onSuccess(response.data)
        })
        .catch(() => {
          f.onError()
        })
    },
    uploadImgSuccess (response, file, fileList) {
      this.currentClass.image = response.data.url
      this.$message({
        showClose: true,
        message: '修改班级封面成功',
        type: 'success' })
    },
    handleRemove (file, fileList) {
      console.log('文件删除')
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
    margin: 0 0 13px;
    font-size: 18px;
  }

  .course-detail {
    margin: 5%;
  }

  .detail-title {
    font-size: 20px;
    color: #606266;
  }

  .clazz-title {
    font-size: 23px;
    color: #606266;
  }

  .clazz-introduction {
    margin: 1% 2%;
  }

  .course-card {
    margin: 3% 7% 0;
  }

  .add-button {
    margin-top: 5%;
  }
</style>
