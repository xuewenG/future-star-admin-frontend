<template>
  <el-container>
    <el-main>
      <el-divider/>
      <router-link to="/create-activity">
        <img class="add-activity" src="../../assets/addIcon.png">
      </router-link>
      <el-divider/>
      <el-tabs v-model="activeName">
        <el-tab-pane label="正在报名中" name="first">
          <activity-in-enrollment/>
        </el-tab-pane>
        <el-tab-pane label="正在进行中" name="second">
          <activity-in-progress/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          <activity-completed/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import ActivityInEnrollment from '../../components/activity/ActivityInEnrollment'
import ActivityInProgress from '../../components/activity/ActivityInProgress'
import ActivityCompleted from '../../components/activity/ActivityCompleted'
export default {
  name: 'ActivityManagementPage',
  components: { ActivityCompleted, ActivityInProgress, ActivityInEnrollment },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
  .add-activity {
    width: 110px;
    height: 110px;
  }
</style>
