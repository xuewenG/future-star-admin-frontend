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
        <el-row>
          起止时间： {{ currentClass.start_time }} ---- {{ currentClass.end_time }}
        </el-row>
        <el-row>
          班级人数： {{ currentClass.current_people_number }} / {{ currentClass.people_number_limit }}
        </el-row>
        <el-row>
          班级介绍： {{ currentClass.introduction }}
        </el-row>
        <el-divider content-position="center">课程详情</el-divider>
        <el-card v-for="course in courses" :key="course.courseId" shadow="never">
          <el-row>
            <el-col :span="21">
              课程名：{{ course.courseName }}
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-more" @click="lookOverCourseDetail" circle></el-button>
            </el-col>
            <el-col :span="1">
              <el-button type="primary" size="mini" icon="el-icon-edit-outline" @click="editCourseInfo" circle></el-button>
            </el-col>
            <el-col :span="1">
            <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </el-col>
          </el-row>
        </el-card>
        <el-row type="flex" justify="center">
          <el-button type="primary" @click="addCourse" round>添加课程</el-button>
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
          courseId: '1',
          courseName: '素质教育行业现状分析与未来展望',
          courseIntroduction: '',
          coursePlace: '',
          courseStartTime: '',
          courseEndTime: '',
          courseTeachers: [
            {
              teacherId: '1',
              teacherName: 's',
              teacherAvatar: 's',
              teacherTitle: 's',
              teacherBriefIntroduction: 's',
              teacherContactInformation: 's'
            },
            {
              teacherId: '1',
              teacherName: 's',
              teacherAvatar: 's',
              teacherTitle: 's',
              teacherBriefIntroduction: 's',
              teacherContactInformation: 's'
            }
          ],
          subCourses: [
            {
              subCourseId: '1',
              subCourseName: '',
              resourceType: '',
              resourceName: '',
              resourceUrl: '',
              resourceContent: ''
            },
            {
              subCourseId: '2',
              subCourseName: '',
              resourceType: '',
              resourceName: '',
              resourceUrl: '',
              resourceContent: ''
            }
          ]
        },
        {
          courseId: '2',
          courseName: '素质教育行业现状分析与未来展望',
          courseIntroduction: '',
          coursePlace: '',
          courseStartTime: '',
          courseEndTime: '',
          courseTeachers: [
            {
              teacherName: '2',
              teacherAvatar: '3',
              teacherTitle: 'w',
              teacherBriefIntroduction: 'w',
              teacherContactInformation: 'w'
            }
          ],
          subCourses: [
            {
              subCourseName: 'w',
              resourceType: 'w',
              resourceName: 'w',
              resourceUrl: 'w',
              resourceContent: 'w'
            }
          ]
        },
        {
          courseId: '3',
          courseName: '素质教育行业现状分析与未来展望',
          courseIntroduction: '',
          coursePlace: '',
          courseStartTime: '',
          courseEndTime: '',
          courseTeachers: [
            {
              teacherName: '',
              teacherAvatar: '',
              teacherTitle: '',
              teacherBriefIntroduction: '',
              teacherContactInformation: ''
            }
          ],
          subCourses: [
            {
              subCourseName: '',
              resourceType: '',
              resourceName: '',
              resourceUrl: '',
              resourceContent: ''
            }
          ]
        }
      ]
    }
  },
  created () {
    this.currentClass = this.$store.getters.getCurrentClass
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    addCourse: function () {
      this.$router.push('/add-course')
    },
    lookOverCourseDetail: function () {
      this.$router.push('/course-detail')
    },
    editCourseInfo: function () {
      this.$store.dispatch('changeCurrentClass', this.currentClass)
      this.$router.push('/edit-course-info')
    },
    editClassInfo: function () {
      this.$router.push('/edit-class-info')
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
</style>
