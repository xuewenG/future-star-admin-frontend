<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="课程信息"></el-page-header>
      <el-divider/>
      <el-card shadow="always">
          <el-row>
            <el-col :span="23">
              课程名称： {{ course.courseName }}
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editCourseInfo" circle></el-button>
            </el-col>
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
          <el-divider>课程资料</el-divider>
          <el-tree :data="resourceData" :props="defaultProps">
          </el-tree>
        <el-row type="flex" justify="center">
          <el-button type="primary" size="small" @click="addCourseResource" round>添加课程资料</el-button>
        </el-row>
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
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      resourceData: [
        {
          label: '课程一',
          children: [
            {
              label: '资料一'
            },
            {
              label: '资料二'
            }
          ]
        }
      ],
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
            subCourseBriefIntroduction: '',
            subCourseResource: [
              '资料一',
              '资料二',
              '资料三'
            ]
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
    },
    editCourseInfo: function () {
      this.$router.push('/edit-course-info')
    },
    addCourseResource: function () {
      this.$router.push('/add-course-resource')
    }
  }
}
</script>

<style scoped>

</style>
