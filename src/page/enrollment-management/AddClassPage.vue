<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="创建班级"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-form class="activity-table" label-width="150px">
          <el-form-item class="activity-title" label="班级名称：">
            <el-input type="text" v-model="currentClass.name"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="8">
              <el-form-item label="限制人数：">
                <el-input type="text" v-model="currentClass.people_number_limit"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="班级起止时间：">
            <el-date-picker
              v-model="currentClass.timeRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="班级介绍：">
            <el-input
              :autosize="{ minRows: 6, maxRows: 30}"
              v-model="currentClass.introduction"
              type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="space-around">
              <el-col :span="3">
                <el-button type="primary" @click="createClass" round>创建</el-button>
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
  name: 'AddClassPage',
  data () {
    return {
      semester: '',
      currentClass: {
        name: '',
        introduction: '',
        start_time: '',
        end_time: '',
        timeRange: '',
        current_people_number: '',
        people_number_limit: '',
        state: 0
      }
    }
  },
  created () {
    this.semester = this.$store.getters.getCurrentSemester
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.currentClass.name = ''
      this.currentClass.people_number_limit = ''
      this.currentClass.timeRange = ''
      this.currentClass.introduction = ''
    },
    createClass: function () {
      let that = this
      that.axios.post('/clazz/clazz', {
        semester_id: that.semester.id,
        name: that.currentClass.name,
        introduction: that.currentClass.introduction,
        start_time: that.currentClass.timeRange[0].toLocaleDateString().replace(/\//g, '-'),
        end_time: that.currentClass.timeRange[1].toLocaleDateString().replace(/\//g, '-'),
        people_number_limit: that.currentClass.people_number_limit,
        current_people_number: 0
      }).then(function (response) {
        if (response.data.code === '2000') {
          console.log(response)
          that.$message({
            type: 'success',
            message: '创建成功',
            duration: 2000
          })
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
