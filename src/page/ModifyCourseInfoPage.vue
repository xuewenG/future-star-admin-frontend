<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改课程信息"></el-page-header>
      <el-divider/>
      <el-card shadow="always">
        <el-form label-width="150px">
          <el-form-item label="课程名称：">
            <el-input
              v-model="course.courseName">
            </el-input>
          </el-form-item>
          <el-form-item label="课程起止时间：">
            <el-time-picker
              is-range
              v-model="course.timeRange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-form-item>
          <el-form-item label="课程地点：">
            <el-input
              v-model="course.coursePlace">
            </el-input>
          </el-form-item>
          <el-form-item label="课程介绍：">
            <el-input
              :autosize="{ minRows: 6, maxRows: 30}"
              v-model="course.courseIntroduction"
              type="textarea"/>
          </el-form-item>
          <el-divider>子课程信息</el-divider>
          <el-row v-for="subCourse in course.subCourses" :key="subCourse.subCourseId">
            <el-form-item label="子课程名：">
              <el-input v-model="subCourse.subCourseName"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button type="primary">添加子课程</el-button>
          </el-row>
          <el-divider>讲师信息</el-divider>
          <div v-for="teacher in course.courseTeachers" :key="teacher.teacherId">
            <el-row>
              <el-form-item label="讲师名：">
                <el-input v-model="teacher.teacherName"></el-input>
              </el-form-item>
            </el-row>
            <el-form-item label="讲师头像：">
              <el-input v-model="teacher.teacherAvatar"></el-input>
            </el-form-item>
            <el-row>
              <el-form-item label="讲师头衔：">
                <el-input v-model="teacher.teacherTitle"></el-input>
              </el-form-item>
            </el-row>
            <el-form-item label="讲师简介：">
              <el-input v-model="teacher.teacherBriefIntroduction"></el-input>
            </el-form-item>
            <el-row>
              <el-form-item label="讲师联系方式：">
                <el-input v-model="teacher.teacherContactInformation"></el-input>
              </el-form-item>
            </el-row>
          </div>
          <el-row>
            <el-button type="primary">添加老师</el-button>
          </el-row>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ModifyCourseInfoPage',
  data () {
    return {
      course: {
        courseName: '滴滴滴滴滴大',
        courseIntroduction: '这是一门xxxxk课',
        coursePlace: 'HFUT',
        courseTimeRange: '',
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
  }
}
</script>

<style scoped>

</style>

