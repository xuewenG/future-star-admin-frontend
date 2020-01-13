<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="新建课程"></el-page-header>
      <el-divider></el-divider>
      <el-card shadow="never">
        <el-form label-width="150px">
        <el-divider>课程信息</el-divider>
        <el-card shadow="never">
            <el-form-item label="课程名称：">
              <el-input
                v-model="course.name">
              </el-input>
            </el-form-item>
            <el-form-item label="课程起止时间：">
              <el-date-picker
                type="daterange"
                v-model="course.timeRange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="课程地点：">
              <el-input
                v-model="course.location">
              </el-input>
            </el-form-item>
            <el-form-item label="课程介绍：">
              <el-input
                :autosize="{ minRows: 6, maxRows: 30}"
                v-model="course.introduction"
                type="textarea"/>
            </el-form-item>
        </el-card>
        <el-divider>讲师信息</el-divider>
        <el-card shadow="never">
          <el-row>
            <el-col :span="11">
              <el-form-item label="讲师名：">
                <el-input v-model="course.teacher.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="13">
              <el-form-item label="讲师联系方式：">
                <el-input v-model="course.teacher.contact_way"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="讲师头像：">
            <el-input v-model="course.teacher.avatar"></el-input>
          </el-form-item>
          <el-form-item label="讲师头衔：">
            <el-input v-model="course.teacher.title"></el-input>
          </el-form-item>
          <el-form-item label="讲师简介：">
            <el-input
              :autosize="{ minRows: 3, maxRows: 8}"
              v-model="course.teacher.introduction"
              type="textarea"/>
          </el-form-item>
        </el-card>
        <el-form-item>
          <el-row type="flex" justify="space-around">
            <el-col :span="3">
              <el-button type="primary" @click="createCourse" round>创建</el-button>
            </el-col>
            <el-col :span="3">
              <el-button @click="clearText" round>清空</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'AddCoursePage',
  data: function () {
    return {
      currentClass: {},
      course: {
        name: '',
        introduction: '',
        location: '',
        timeRange: '',
        teacher: {
          name: '',
          avatar: '',
          title: '',
          introduction: '',
          contact_way: ''
        }
      }
    }
  },
  created () {
    this.currentClass = this.$store.getters.getCurrentClass
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.course = {
        name: '',
        introduction: '',
        location: '',
        timeRange: '',
        teacher: {
          name: '',
          avatar: '',
          title: '',
          introduction: '',
          contact_way: ''
        }
      }
    },
    createCourse: async function () {
      let that = this
      let startTime = that.course.timeRange[0].toLocaleDateString().replace(/\//g, '-')
      let endTime = that.course.timeRange[1].toLocaleDateString().replace(/\//g, '-')
      await that.$store.dispatch('changeCurrentCourse', that.course)
      that.axios.post('/course/course', {
        clazz: that.currentClass.id,
        name: that.course.name,
        introduction: that.course.introduction,
        begin_time: startTime,
        end_time: endTime,
        location: that.course.location,
        teacher: {
          name: that.course.teacher.name,
          avatar: that.course.teacher.avatar,
          title: that.course.teacher.title,
          introduction: that.course.teacher.introduction,
          contact_way: that.course.teacher.contact_way
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          await that.$router.push('/class-detail')
          that.$message({
            type: 'success',
            message: '创建成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
