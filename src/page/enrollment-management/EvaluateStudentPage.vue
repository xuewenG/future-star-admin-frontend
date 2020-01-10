<template>
  <el-container direction="vertical">
    <el-main>
      <el-page-header @back="goBack" content="评价填写"></el-page-header>
      <el-divider></el-divider>
      <el-card shadow="never" class="card-outside">
        <el-divider>申请信息</el-divider>
        <el-row>
          <h4>申请理由：</h4>{{ currentApplyInformation.apply.reason_application }}
        </el-row>
        <el-row>
          <h4>是否支持考勤：</h4>{{ currentApplyInformation.apply.accept_absence === 0 ? '支持': '不支持' }}
        </el-row>
        <el-row>
          <h4>对我们的贡献：</h4>{{ currentApplyInformation.apply.contribution_for_us }}
        </el-row>
        <el-row>
          <h4>申请方式：</h4>{{ currentApplyInformation.apply.way }}
        </el-row>
        <el-divider>推荐人</el-divider>
        <el-card shadow="never" v-for="person in currentApplyInformation.apply.recommendation_peoples" :key="person.id">
          <el-row>
            <el-col :span="8">
              <h4>姓名：</h4> {{ person.name }}
            </el-col>
            <el-col :span="8">
              <h4>公司：</h4> {{ person.company }}
            </el-col>
            <el-col :span="8">
              <h4>职位：</h4> {{ person.position }}
            </el-col>
          </el-row>
          <el-row>
            <h4>个人信息：</h4> {{ person.information }}
          </el-row>
        </el-card>
        <el-divider>评价</el-divider>
        <el-card shadow="never">
          <el-form label-width="100" label-position="left">
            <el-form-item label="分数">
              <el-input v-model="currentApplyInformation.evaluation.fraction"></el-input>
            </el-form-item>
            <el-form-item label="评价">
              <el-input
                :autosize="{ minRows: 4, maxRows: 8}"
                v-model="currentApplyInformation.evaluation.description"
                type="textarea"/>
            </el-form-item>
            <el-form-item>
              <el-row type="flex" justify="space-around">
                <el-col :span="3">
                  <el-button type="primary" @click="saveEvaluationInfo">保存</el-button>
                </el-col>
                <el-col :span="3">
                  <el-button @click="clearText">清空</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EvaluateStudentPage',
  data () {
    return {
      currentApplyInformation: {
        id: '',
        apply: {
          id: '',
          recommendation_peoples: [
            {
              id: '',
              name: '',
              company: '',
              position: '',
              information: ''
            }
          ],
          reason_application: '',
          contribution_for_us: '',
          way: '',
          accept_absence: ''
        },
        evaluation: {
          id: '',
          fraction: '',
          description: ''
        },
        state: ''
      }
    }
  },
  created () {
    this.currentApplyInformation = this.$store.getters.getCurrentApplyInformation
    console.log(this.currentApplyInformation)
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.currentApplyInformation.evaluation.fraction = ''
      this.currentApplyInformation.evaluation.description = ''
    },
    saveEvaluationInfo: function () {
      let that = this
      let url = '/clazz/student/' + that.currentApplyInformation.id
      that.axios.put(url, {
        evaluation: {
          fraction: that.currentApplyInformation.evaluation.fraction,
          description: that.currentApplyInformation.evaluation.description
        }
      }).then(async function (response) {
        if (response.data.code === '2000') {
          await that.$store.dispatch('changeCurrentApplyInformation', that.currentApplyInformation)
          that.$message({
            type: 'success',
            message: '保存成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '网络繁忙，请稍后重试',
          duration: 2000
        })
      })
    }
  }
}
</script>

<style scoped>
  .el-card.card-outside {
    width: 800px;
    margin: 0 auto;
  }

  h4 {
    display: inline;
    font-weight: 600;
  }
</style>
