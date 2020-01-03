<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="学期信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
       <el-row>
         学期主题：{{ semester.gist }}
       </el-row>
        <el-row>
          学期介绍： {{ semester.introduction }}
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'SemesterDetailPage',
  data () {
    return {
      semester: {
        gist: '第九期创新院',
        introduction: '这是一期很好的课程'
      }
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
  .activity-card {
    width: 70%;
    margin: auto;
  }

  .activity-table {
    margin: 40px 20px;
  }
</style>
