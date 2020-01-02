<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="新建班级"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-row>
          班级名称： {{ newClass.className }}
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
            课程名：{{ course.courseName }}
          </el-row>
          <el-row>
            课程名：{{ course.coursePlace }}
          </el-row>
          <el-row>
            起止时间：{{ course.courseStartTime }} / {{ course.courseEndTime }}
          </el-row>
          <el-row>
            上课地点：{{ course.coursePlace }}
          </el-row>
          <el-row>
            课程介绍： {{ course.courseIntroduction }}
          </el-row>
          <el-divider content-position="center">子课程</el-divider>
            <el-card>
              <el-row v-for="(subCourse, index) in course.subCourses" :key="subCourse.subCourseId">
                {{ index }}： {{ subCourse.subCourseName }}
              </el-row>
            </el-card>
          <el-divider content-position="center">讲师</el-divider>
            <el-card>
              <div v-for="teacher in course.courseTeachers" :key="teacher.teacherId">
                <el-row>
                  讲师头像： {{ teacher.teacherAvatar }}
                </el-row>
                <el-row>
                  {{ teacher.teacherName }} ： {{ teacher.teacherTitle }}
                </el-row>
                <el-row>
                  联系方式：{{ teacher.teacherContactInformation }}
                </el-row>
                <el-row>
                  讲师简介：{{ teacher.teacherBriefIntroduction }}
                </el-row>
                <el-divider></el-divider>
              </div>
            </el-card>
        </el-card>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ClassDetailPage',
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
