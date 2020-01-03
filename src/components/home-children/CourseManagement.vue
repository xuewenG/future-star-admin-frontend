<template>
  <el-container>
    <el-header>
      <h2>{{ semester }}</h2>
    </el-header>
    <el-main class="main-in-enrollment">
      <el-tabs v-model="activeName">
        <el-tab-pane label="待开课" name="first">
          <wait-for-start-classes></wait-for-start-classes>
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          <underway-classes></underway-classes>
      </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          <ended-classes></ended-classes>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import WaitForStartClasses from '../class/ClassesWaittingForStart'
import UnderwayClasses from '../class/ClassesUnderway'
import EndedClasses from '../class/ClassesEnded'
export default {
  name: 'CoursementManagementPage',
  components: {
    WaitForStartClasses,
    UnderwayClasses,
    EndedClasses
  },
  data () {
    return {
      activeName: 'first',
      semester: '第九期未来之星创新院'
    }
  }
}
</script>

<style scoped>
  .main-in-enrollment {
    padding: 0;
    margin: 0;
  }

  .el-header {
    padding: 0;
  }
</style>
