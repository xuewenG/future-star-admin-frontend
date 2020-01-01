<template>
  <el-container>
    <el-header>
      <h2>{{ semester }}</h2>
    </el-header>
    <el-main class="main-in-enrollment">
      <el-tabs v-model="activeName">
        <el-tab-pane label="待开课" name="first">
          ss
        </el-tab-pane>
        <el-tab-pane label="进行中" name="second">
          ss
      </el-tab-pane>
        <el-tab-pane label="已结束" name="third">
          ss
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CoursementManagementPage',
  components: {
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
