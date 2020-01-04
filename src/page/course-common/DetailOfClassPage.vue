<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="班级详情"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-row>
          <el-col :span="23">
            班级名称： {{ newClass.className }}
          </el-col>
          <el-col :span="1">
            <el-button type="primary" size="mini" icon="el-icon-edit-outline" circle></el-button>
          </el-col>
        </el-row>
        <el-row>
          起止时间： {{ newClass.startTime }} ---- {{ newClass.endTime }}
        </el-row>
        <el-row>
          班级人数： {{ newClass.currentAmountOfStudent }} / {{ newClass.limitsOfStudent }}
        </el-row>
        <el-row>
          班级介绍： {{ newClass.classIntroduction }}
        </el-row>
        <el-divider content-position="center">课程详情</el-divider>
        <el-card v-for="course in newClass.courses" :key="course.courseId">
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
      newClass: {
        className: '素质教育专题班',
        classIntroduction: '如何体系化的进行素质教育类产品设计与开发？\n' +
          '\n' +
          '如何实现素质教育的效果外化和用户感知？\n' +
          '\n' +
          '如何高效获客并延长客户生命周期？\n' +
          '\n' +
          '如何实现规模化发展及标准化运营？\n' +
          '\n' +
          '如何提升客户亲密度与客户满意度，赢得客户口碑？\n' +
          '\n' +
          '如何做好人才体系搭建、团队管理与有效激励？\n' +
          '\n' +
          '大数据、人工智能、直播技术、智能硬件等如何与素质教育相结合？',
        startTime: '2019-12-10',
        endTime: '2019-12-31',
        limitsOfStudent: '46',
        currentAmountOfStudent: '2',
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
    }
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
      this.$router.push('/edit-course-info')
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
