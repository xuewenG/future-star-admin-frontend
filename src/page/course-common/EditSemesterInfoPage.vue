<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改学期信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-form class="activity-table" label-width="150px">
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
            <el-row type="flex" justify="center" class="operation-button">
              <el-col :span="8">
                <el-button type="primary" @click="editSemesterInfo">保存</el-button>
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
            message: '请求失败',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器内部错误',
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
