<template>
  <div>
    <el-col :span="12" v-for="(item) in activities" :key="item.id" >
      <h4 v-if="activities.length === 0">暂无待举行的活动</h4>
      <el-card class="activity-card">
        <div slot="header">
          <span>{{ item.activityName }}</span>
          <el-button type="text"></el-button>
          <el-button type="primary" size="small" class="btn" icon="el-icon-s-custom" @click="showParticipants()" circle></el-button>
          <el-button type="primary" size="small" class="btn" icon="el-icon-edit-outline" @click="editDetails()" circle></el-button>
          <el-button type="primary" size="small" class="btn" icon="el-icon-more" @click="showDetails()" circle></el-button>
        </div>
        <el-row>
          起止日期：{{ item.activityStartTime }} —— {{ item.activityEndTime }}
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
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'ActivityWaittingForStart',
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
          state: '待举行'
        }
      ]
    }
  },
  methods: {
    showParticipants () {
      this.$router.push('/show-participants')
    },
    editDetails () {
      this.$router.push('/edit-activity')
    },
    showDetails () {
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

  .btn {
    float: right;
  }

  .activity-card {
    padding: 14px;
    margin: 14px;
  }
</style>
