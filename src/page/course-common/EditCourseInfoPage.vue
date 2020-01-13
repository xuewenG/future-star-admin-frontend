<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="课程信息"></el-page-header>
      <el-divider/>
      <el-card shadow="never" class="activity-card">
        <el-form label-width="150px">
          <el-form-item label="课程图标：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadImg"
              :on-success="uploadIconSuccess">
              <img v-if="course.icon" :src="course.icon"  width=100px class="image" alt="image">
              <i v-else class="el-icon-plus avatar-uploader-icon">添加课程图标</i>
            </el-upload>
          </el-form-item>
          <el-form-item label="课程图片：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadImg"
              :on-success="uploadImgSuccess">
              <img v-if="course.image" :src="course.image"  width=500px class="image" alt="image">
              <i v-else class="el-icon-plus avatar-uploader-icon">添加课程图片</i>
            </el-upload>
          </el-form-item>
          <el-form-item label="课程名称：">
            <el-input
              v-model="course.name">
            </el-input>
          </el-form-item>
          <el-form-item label="课程类别：">
            <el-input
              v-model="course.sort">
            </el-input>
          </el-form-item>
          <el-form-item label="班级起止时间：">
            <el-col :span="7">
              <el-date-picker
                v-model="course.begin_time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="2" align="center">
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
            <el-row type="flex" justify="space-around">
              <el-col :span="3">
                <el-button type="primary" @click="saveCourseInfo" round>保存</el-button>
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
    goBack: async function () {
      await this.$router.push('/class-detail')
    },
    clearText: function () {
      this.course.name = ''
      this.course.introduction = ''
      this.course.location = ''
      this.course.begin_time = ''
      this.course.end_time = ''
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
      this.course.image = response.data.url
      this.$message({
        showClose: true,
        message: '修改班级图片成功',
        type: 'success' })
    },
    uploadIconSuccess (response, file, fileList) {
      this.course.icon = response.data.url
      this.$message({
        showClose: true,
        message: '修改课程图标成功',
        type: 'success' })
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
  .activity-card {
    width: 70%;
    margin: auto;
  }
</style>
