<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改班级信息"></el-page-header>
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
            <el-col :span="8">
              <el-date-picker
                v-model="currentClass.start_time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="2">
              至
            </el-col>
            <el-col :span="8">
              <el-date-picker
                v-model="currentClass.end_time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="班级介绍：">
            <el-input
              :autosize="{ minRows: 6, maxRows: 30}"
              v-model="currentClass.introduction"
              type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="center" class="operation-button">
              <el-col :span="8">
                <el-button type="primary" @click="saveClassInfo">保存</el-button>
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
  name: 'EditClassInfoPage',
  data () {
    return {
      semester: '',
      currentClass: {
        name: '',
        introduction: '',
        start_time: '',
        end_time: '',
        current_people_number: '',
        people_number_limit: '',
        state: 0
      }
    }
  },
  created () {
    this.semester = this.$store.getters.getCurrentSemester
    this.currentClass = this.$store.getters.getCurrentClass
    if(this.currentClass) {
      this.currentClass.start_time = new Date(this.currentClass.start_time)
      this.currentClass.end_time = new Date(this.currentClass.end_time)
    }
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
    saveClassInfo: async function () {
      let that = this
      let url = '/clazz/clazz/' + that.currentClass.id
      that.currentClass.start_time = that.currentClass.start_time.toLocaleDateString().replace(/\//g, '-')
      that.currentClass.end_time = that.currentClass.end_time.toLocaleDateString().replace(/\//g, '-')
      await that.$store.dispatch('changeCurrentClass', that.currentClass)
      that.axios.put(url, {
        name: that.currentClass.name,
        introduction: that.currentClass.introduction,
        start_time: that.currentClass.start_time,
        end_time: that.currentClass.end_time,
        people_number_limit: that.currentClass.people_number_limit
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
            message: '请求出错',
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
