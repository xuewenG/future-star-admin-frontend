<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="子课程及学习资源"></el-page-header>
      <el-divider></el-divider>
      <el-card>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DetailOfSubCoursePage',
  data () {
    return {
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
