<template>
  <div>
    <h4 v-if="activities.length === 0">暂无进行中活动</h4>
    <el-card v-for="(item) in activities" :key="item.id" class="activity-card">
      <div slot="header">
        <span>{{ item.activityName }}</span>
        <el-button type="text" class="btn">结束活动</el-button>
        <el-button type="text" class="btn" @click="showParticipants()">查看已参加校友名单</el-button>
        <el-button type="text" class="btn">编辑活动信息</el-button>
        <el-button type="text" class="btn">查看活动信息</el-button>
      </div>
      <el-row>
        起止日期：{{ item.activityStartTime }} ——— {{ item.activityEndTime }}
      </el-row>
      <el-row>
        活动人数：{{ item.currentAmountOfParticipants }} / {{ item.capacity }}
      </el-row>
      <el-row>
        活动状态：{{ item.state }}
      </el-row>
      <el-row>
        活动简介：{{ item.activityIntroduction | ellipsis }}
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ActivityInProgress',
  data () {
    return {
      activities: [
        {
          id: '1',
          activityName: '大蜀山一日游',
          activityIntroduction: '这里是一个加了长文本省略号替代的活动介绍',
          activityStartTime: '2019/12/19',
          activityEndTime: '2019/12/21',
          currentAmountOfParticipants: '13',
          capacity: '15',
          state: '进行中'
        },
        {
          id: '2',
          activityName: '大蜀山一日游',
          activityIntroduction: '这里是一个加了长文本省略号替代的活动介绍',
          activityStartTime: '2019/12/20',
          activityEndTime: '2019/12/21',
          currentAmountOfParticipants: '13',
          capacity: '15',
          state: '进行中'
        },
        {
          id: '3',
          activityName: '大蜀山一日游',
          activityIntroduction: '这里是一个加了长文本省略号替代的活动介绍',
          activityStartTime: '2019/12/21',
          activityEndTime: '2019/12/22',
          currentAmountOfParticipants: '13',
          capacity: '15',
          state: '进行中'
        }
      ]
    }
  },
  methods: {
    showParticipants () {
      this.$router.push('/show-participants')
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

  .btn {
    float: right;
  }

  .activity-card {
    margin-bottom: 15px;
  }
</style>
