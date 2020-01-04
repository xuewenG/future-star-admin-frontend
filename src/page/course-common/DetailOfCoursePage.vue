<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="课程信息"></el-page-header>
      <el-divider/>
      <el-card shadow="always">
          <el-row>
            课程名称： {{ course.courseName }}
          </el-row>
          <el-row>
            课程起止时间： {{ course.courseStartTime }} ---- {{ course.courseEndTime }}
          </el-row>
          <el-row>
            上课地点： {{ course.coursePlace }}
          </el-row>
          <el-row>
            课程介绍： {{ course.courseIntroduction }}
          </el-row>
          <el-divider>子课程信息</el-divider>
          <div v-for="subCourse in course.subCourses" :key="subCourse.subCourseId">
            <el-row>
              子课程名： {{ subCourse.subCourseName }}
            </el-row>
          </div>
          <el-divider>讲师信息</el-divider>
          <div v-for="teacher in course.courseTeachers" :key="teacher.teacherId">
            <el-row>
              讲师名： {{ teacher.teacherName }}
            </el-row>
            <el-row>
              讲师头像: {{ teacher.teacherAvatar }}
            </el-row>
            <el-row>
              讲师头衔：{{ teacher.teacherTitle }}
            </el-row>
            <el-row>
              讲师简介： {{ teacher.teacherBriefIntroduction }}
            </el-row>
            <el-row>
              讲师联系方式： {{ teacher.teacherContactInformation }}
            </el-row>
          </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CourseDetailPage',
  data () {
    return {
      course: {
        courseName: '滴滴滴滴滴大',
        courseIntroduction: '这是一门xxxxk课',
        coursePlace: 'HFUT',
        courseTimeRange: '',
        courseStartTime: '',
        courseEndTime: '',
        subCourses: [
          {
            subCourseId: '',
            subCourseName: '现状分析',
            subCourseBriefIntroduction: ''
          }
        ],
        courseTeachers: [
          {
            teacherId: '',
            teacherName: '',
            teacherAvatar: '',
            teacherTitle: '',
            teacherBriefIntroduction: '',
            teacherContactInformation: ''
          }
        ]
      }
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
