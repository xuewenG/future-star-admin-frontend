<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改班级信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
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
              class="long-text"
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
  name: 'EditCourseInfoPage',
  data () {
    return {
      currentClass: {
        id: '2',
        name: '素质教育专题班',
        introduction: '这里是一个加了长文本省略号替代的班级介绍',
        start_time: '2019/12/20',
        end_time: '2019/12/21',
        timeRange: ['2019/12/20', '2019/12/21'],
        current_people_number: '0',
        people_number_limit: '15',
        state: 0
      }
    }
  },
  created () {
    this.currentClass = this.$store.getters.getCurrentClass
    if (this.currentClass) {
      this.currentClass.timeRange = [this.currentClass.start_time, this.currentClass.end_time]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.currentClass.name = ''
      this.currentClass.people_number_limit = ''
      this.currentClass.timeRange = ['', '']
      this.currentClass.introduction = ''
    },
    saveClassInfo: function () {
      let that = this
      let url = '/clazz/clazz/' + that.currentClass.id
      that.axios.put(url, {
        name: that.currentClass.name,
        introduction: that.currentClass.introduction,
        start_time: that.currentClass.timeRange[0],
        end_time: that.currentClass.timeRange[1],
        people_number_limit: that.currentClassl.people_number_limit
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          that.$message({
            type: 'success',
            message: '请求出错'
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'success',
          message: '服务器内部错误'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
