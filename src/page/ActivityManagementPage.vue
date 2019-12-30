<template>
  <el-container>
    <el-header>
      <home-page/>
    </el-header>
    <el-main>
      <el-divider/>
      <el-label>新建校友活动</el-label>
      <router-link to="/activity-management/create-activity">
        <img src="../assets/addIcon.png"/>
      </router-link>
      <el-divider/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ActivityManagementPage'
}
</script>

<style scoped>

</style>
