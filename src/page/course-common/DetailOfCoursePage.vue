<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="课程信息"></el-page-header>
      <el-divider/>
      <el-row type="flex" justify="center">
        <el-card shadow="never">
          <el-row slot="header">
            <el-col :span="8">
              课程名称： {{ course.name }}
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editCourseInfo" circle></el-button>
            </el-col>
          </el-row>
          <el-row>
            课程起止时间： {{ course.begin_time }} ---- {{ course.end_time }}
          </el-row>
          <el-row>
            上课地点： {{ course.location }}
          </el-row>
          <el-row>
            课程介绍： {{ course.introduction }}
          </el-row>
          <el-row>
            课程介绍： {{ course.sort }}
          </el-row>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CourseDetailPage',
  data () {
    return {
      course: {
        name: '',
        introduction: '',
        location: '',
        begin_time: '',
        end_time: ''
      }
    }
  },
  created () {
    this.course = this.$store.getters.getCurrentCourse
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    editCourseInfo: async function () {
      await this.$store.dispatch('changeCurrentCourse', this.course)
      await this.$router.push('/edit-course-info')
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin: 0 0 10px;
  }

  .el-card {
    width: 700px;
  }
</style>
