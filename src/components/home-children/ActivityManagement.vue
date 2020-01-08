<template>
  <el-container>
    <el-header>
      <router-link to="/create-activity">
        <el-tooltip class="item" effect="dark" content="新建活动" placement="right">
          <img class="add-activity" src="../../assets/addIcon.png">
        </el-tooltip>
      </router-link>
    </el-header>
    <el-main>
      <el-divider/>
      <el-tabs v-model="activeName" @tab-click="changeActiveName" type="border-card">
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
    this.activeName = this.$store.getters.getActiveNameOfActivity
  },
  methods: {
    changeActiveName: function (tab) {
      this.$store.dispatch('changeActiveNameOfActivity', tab.name)
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
