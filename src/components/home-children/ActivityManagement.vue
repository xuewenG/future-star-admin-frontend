<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="13" class="list-title">
          <h4>- 活动列表 -</h4>
        </el-col>
        <el-col :span="4" offset="6" class="add-button-tar">
          <router-link to="/create-activity" >
            <i class="el-icon-circle-plus-outline add-button"></i>
          </router-link>
        </el-col>
      </el-row>
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
    }
  }
}
</script>

<style scoped>

  .add-button {
    font-size: 30px;
    color: #409eff;
  }

  .list-title {
    font-size: 25px;
    text-align: right;
  }

  .add-button-tar {
    margin-top: 2%;
    text-align: right;
  }

  .el-main {
    padding: 0;
    margin: 0;
  }

  .admin-table {
    margin: 40px 20px;
  }

  .el-header {
    padding: 0;
    margin: 0;
  }

  h4 {
    color: #707070;
  }
</style>
