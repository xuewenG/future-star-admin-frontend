<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="修改课程信息"></el-page-header>
      <el-divider/>
      <el-card shadow="never">
        <el-form label-width="150px">
          <el-form-item label="课程名称：">
            <el-input
              v-model="course.name">
            </el-input>
          </el-form-item>
          <el-form-item label="班级起止时间：">
            <el-col :span="6">
              <el-date-picker
                v-model="course.begin_time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="2">
              至
            </el-col>
            <el-col :span="8">
              <el-date-picker
                v-model="course.end_time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
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
          <el-form-item>
            <el-row type="flex" justify="center" class="operation-button">
              <el-col :span="8">
                <el-button type="primary" @click="saveCourseInfo">保存</el-button>
              </el-col>
              <el-col :span="8">
                <el-button @click="clearText">清空</el-button>
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
  name: 'EditCourseInfoPage',
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
    if (this.course) {
      this.course.start_time = new Date(this.course.start_time)
      this.course.end_time = new Date(this.course.end_time)
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.course.name = ''
      this.course.introduction = ''
      this.course.location = ''
      this.course.begin_time = ''
      this.course.end_time = ''
    },
    saveCourseInfo: async function () {
      let that = this
      let url = '/course/course/' + that.course.id
      that.course.start_time = that.course.start_time.toLocaleDateString().replace(/\//g, '-')
      that.course.end_time = that.course.end_time.toLocaleDateString().replace(/\//g, '-')
      await that.$store.dispatch('changeCurrentCourse', that.course)
      that.axios.put(url, {
        name: that.course.name,
        introduction: that.course.introduction,
        start_time: that.course.start_time,
        end_time: that.course.end_time,
        location: that.course.location
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '保存成功',
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
