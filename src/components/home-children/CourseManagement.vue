<template>
  <el-container>
    <el-header>
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <h2>{{ semester }}</h2>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" class="btn" icon="el-icon-more" @click="lookOverSemesterDetail()" circle></el-button>
        </el-col>
      </el-row>
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
  },
  methods: {
    lookOverSemesterDetail: function () {
      this.$router.push('/semester-detail')
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
