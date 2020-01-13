<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="学期详情"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-form class="activity-table" label-width="140px">
          <el-form-item class="activity-title" label="学期图标：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :http-request="uploadImg"
              :on-success="uploadImgSuccess"
              :on-remove="handleRemove">
              <img v-if="semester.icon" :src="semester.icon" class="image" alt="image">
              <i v-else class="el-icon-plus avatar-uploader-icon">添加学期图片</i>
            </el-upload>
          </el-form-item>
          <el-form-item class="activity-title" label="学期主题：">
            <el-input
              v-model="semester.subject"
              placeholder="请输入本学期主题"
              class="short-text">
            </el-input>
          </el-form-item>
          <el-form-item label="学期介绍：">
            <el-input
              v-model="semester.introduction"
              placeholder="请输入本学期介绍"
              :autosize="{ minRows: 6, maxRows: 30}"
              class="long-text"
              type="textarea">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="space-around">
              <el-col :span="3">
                <el-button type="primary" @click="editSemesterInfo" round>保存</el-button>
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
  name: 'EditSemesterInfoPage',
  created () {
    this.semester = this.$store.getters.getCurrentSemester
  },
  data () {
    return {
      semester: {
        subject: '',
        introduction: ''
      }
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.semester.subject = ''
      this.semester.introduction = ''
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
      this.semester.icon = response.data.url
      this.$message({
        showClose: true,
        message: '修改学期图标成功',
        type: 'success' })
    },
    handleRemove (file, fileList) {
      console.log('文件删除')
    },
    editSemesterInfo: function () {
      let that = this
      let url = '/semester/semester/' + this.semester.id
      that.axios.put(url, {
        period_semester: that.semester.period_semester,
        subject: that.semester.subject,
        introduction: that.semester.introduction,
        state: that.semester.state
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '修改学期信息成功',
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

  .activity-table {
    margin: 40px 20px;
  }

</style>
