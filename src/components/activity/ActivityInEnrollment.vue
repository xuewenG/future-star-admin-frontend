<template>
  <div>
    <el-col :span="12" v-for="activity in activities" :key="activity.id">
      <h4 v-if="activities.length === 0">暂无报名中的活动</h4>
      <el-card shadow="never">
        <el-row slot="header" type="flex" justify="end">
          <el-col :span="2" :pull="4">
            <el-avatar :src="activity.icon"></el-avatar>
          </el-col>
          <el-col :span="5" :pull="3">
            {{ activity.name }}
          </el-col>
          <el-col :span="4" :offset="4">
            <el-button type="primary" size="small" @click="beingReady(activity)" round>结束报名</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="showDetails(activity)" round>活动详情</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="showParticipants(activity)" round>活动成员</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="12">
            <el-row>
              报名起止日期：{{ activity.enroll_start_time }} —— {{ activity.enroll_end_time }}
            </el-row>
            <el-row>
              活动人数：{{activity.current_people_number}} / {{ activity.people_number_limit }}
            </el-row>
            <el-row>
              活动状态：报名中
            </el-row>
            <el-row>
              活动流程：{{ activity.arrangement | ellipsis }}
            </el-row>
          </el-col>
          <el-col span="12" align="center">
            <img :src="activity.image" width="140px">
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'ActivityInEnrollment',
  data () {
    return {
      loading: true,
      page: 1,
      page_size: 20,
      activities: [],
      change_state: false
    }
  },
  created () {
    if (this.axios) {
      this.findAllActivity()
    }
  },
  watch: {
    change_state () {
      this.findAllActivity()
    }
  },
  methods: {
    findAllActivity () {
      let that = this
      let params = {
        page: that.page,
        page_size: that.page_size,
        activity_state: 1
      }
      that.axios.get('/activity/activity', { params }).then((response) => {
        if (response.data.code === '2000') {
          that.activities = response.data.data.results
        } else {
          that.$message({
            type: 'error',
            message: '请求出错',
            duration: 2000
          })
        }
      })
    },
    beingReady (currentActivity) {
      let url = '/activity/activity/' + currentActivity.id
      this.axios.put(url, {
        state: 2
      }).then((response) => {
        if (response.data.code === '2000') {
          currentActivity.state = 2
          this.change_state = true
          this.$store.dispatch('changeActivities', this.activities)
          this.$message({
            type: 'success',
            message: '结束报名成功成功',
            duration: 2000
          })
          this.$forceUpdate()
        } else {
          this.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'error',
          message: '网络繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    showParticipants (currentActivity) {
      this.$store.dispatch('changeCurrentActivity', currentActivity)
      this.$router.push('/show-participants')
    },
    editDetails (currentActivity) {
      this.$store.dispatch('changeCurrentActivity', currentActivity)
      this.$router.push('/edit-activity')
    },
    showDetails (currentActivity) {
      this.$store.dispatch('changeCurrentActivity', currentActivity)
      this.$router.push('/show-activity-details')
    }
  },
  filters: {
    ellipsis (text) {
      if (!text) return ''
      if (text.length > 30) {
        return text.slice(0, 30) + '......'
      }
      return text
    }
  }
}
</script>

<style scoped>
  div {
    padding: 0;
    margin: 0;
  }

  .el-card {
    margin: 10px;
  }
</style>
