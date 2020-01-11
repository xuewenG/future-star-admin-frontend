<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3">
          <h3>已有活动列表</h3>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" class="el-icon-plus" @click="createActivity()" circle></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="changeActiveName">
        <el-tab-pane label="未开放" name="first">
          <activity-unopened/>
        </el-tab-pane>
        <el-tab-pane label="报名中" name="second">
          <activity-in-enrollment/>
        </el-tab-pane>
        <el-tab-pane label="待举行" name="third">
          <activity-waitting-for-start/>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="fourth">
          <activity-in-progress/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="fifth">
          <activity-completed/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import ActivityUnopened from '../activity/ActivityUnopened'
import ActivityInEnrollment from '../activity/ActivityInEnrollment'
import ActivityWaittingForStart from '../activity/ActivityWaittingForStart'
import ActivityInProgress from '../activity/ActivityInProgress'
import ActivityCompleted from '../activity/ActivityCompleted'
export default {
  name: 'ActivityManagementPage',
  components: {
    ActivityUnopened,
    ActivityCompleted,
    ActivityInProgress,
    ActivityWaittingForStart,
    ActivityInEnrollment
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  created () {
    let that = this
    that.activeName = that.$store.getters.getActiveNameOfActivity
  },
  methods: {
    changeActiveName (tab) {
      this.$store.dispatch('changeActiveNameOfActivity', tab.name)
    },
    createActivity () {
      this.$router.push('/create-activity')
    }
  }
}
</script>

<style scoped>
  .add-activity {
    width: 80px;
    height: 80px;
  }
</style>
