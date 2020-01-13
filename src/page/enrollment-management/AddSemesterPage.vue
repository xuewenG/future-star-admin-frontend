<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack" content="创建学期"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-form class="activity-table" label-width="150px">
          <el-form-item label="学期主题：">
            <el-input
              v-model="semester.subject"
              placeholder="请输入本学期主题">
            </el-input>
          </el-form-item>
          <el-form-item label="学期介绍：">
            <el-input
              v-model="semester.introduction"
              placeholder="请输入本学期介绍"
              :autosize="{ minRows: 6, maxRows: 30}"
              type="textarea">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="space-around">
              <el-col :span="3">
                <el-button type="primary" @click="addSemester" round>创建</el-button>
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
  name: 'AddNewSemesterPage',
  created () {
    let that = this
    that.axios.get('/semester/semester', {
      params: {
        page: 1,
        page_size: 999999
      }
    }).then(async function (response) {
      let semesters = response.data.data.results
      await that.$store.dispatch('changeSemesters', semesters)
    }).catch(function (error) {
      console.log(error)
    })
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
    addSemester: function () {
      let that = this
      that.axios.post('/semester/semester', {
        period_semester: that.$store.getters.getSemesters.length + 1,
        subject: that.semester.subject,
        introduction: that.semester.introduction
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '创建新学期成功',
            duration: 2000
          })
          that.$router.push('/home/enrollment')
        } else {
          that.$message({
            type: 'error',
            message: '输入信息有误',
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
