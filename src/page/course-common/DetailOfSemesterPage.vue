<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="学期信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
       <el-row>
         <el-col :span="6">
           <h4>学期主题：</h4>
           <span class="text">{{ semester.subject }}</span>
         </el-col>
         <el-col :span="1">
           <el-button type="primary" size="mini" class="btn" icon="el-icon-edit-outline" @click="editSemesterInfo" circle></el-button>
         </el-col>
       </el-row>
        <el-row>
          <h4>学期介绍：</h4>
          <span class="text">{{ semester.introduction }}</span>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'SemesterDetailPage',
  created () {
    this.semester = this.$store.getters.getCurrentSemester
  },
  data () {
    return {
      semester: {
        subject: '第九期创新院',
        introduction: '这是一期很好的课程'
      }
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    editSemesterInfo: async function () {
      await this.$router.push('/edit-semester-info')
    }
  }
}
</script>

<style scoped>
  .activity-card {
    width: 62%;
    height: 100%;
    margin: auto;
  }

  .el-row {
    margin-top: 10px;
  }

  h4 {
    margin-bottom: 8px;
  }

  .text {
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
</style>
