<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="讲师信息"></el-page-header>
      <el-divider/>
      <el-card shadow="never">
        <el-form>
          <el-row>
            <el-form-item align="center">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :http-request="uploadImg"
                :on-success="uploadImgSuccess">
                <img v-if="teacher.avatar" :src="teacher.avatar"  width=240px class="image" alt="image">
                <i v-else class="el-icon-plus avatar-uploader-icon">添加头像</i>
              </el-upload>
            </el-form-item>
            <el-form-item label="讲师名：">
              <el-input v-model="teacher.name"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="讲师头衔：">
              <el-input v-model="teacher.title"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="讲师联系方式：">
              <el-input v-model="teacher.contact_way"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="讲师简介：">
              <el-input type="textarea" v-model="teacher.introduction"
                        :autosize="{ minRows: 2, maxRows: 8}"></el-input>
            </el-form-item>
          </el-row>
          <el-form-item>
            <el-row type="flex" justify="space-around">
              <el-col :span="3">
                <el-button type="primary" @click="saveTeacherInfo" round>保存</el-button>
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
  name: 'EditTeacherInfoPage',
  data () {
    return {
      teacher: {}
    }
  },
  created () {
    if (this.$store.getters.getCurrentCourse) {
      let course = this.$store.getters.getCurrentCourse
      this.teacher = course.teacher
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
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
      this.teacher.avatar = response.data.url
      this.$message({
        showClose: true,
        message: '修改讲师头像成功',
        type: 'success' })
    },
    clearText: function () {
      this.teacher.name = ''
      this.teacher.avatar = ''
      this.teacher.title = ''
      this.teacher.introduction = ''
      this.teacher.contact_way = ''
    },
    saveTeacherInfo: function () {
      let that = this
      let url = '/course/teacher/' + that.teacher.id
      that.axios.put(url, {
        name: that.teacher.name,
        avatar: that.teacher.avatar,
        title: that.teacher.title,
        introduction: that.teacher.introduction,
        contact_way: that.teacher.contact_way
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试'
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试'
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
