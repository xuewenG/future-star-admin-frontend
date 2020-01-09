<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="学期信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
       <el-row>
         <el-col :span="23">
           学期主题：{{ semester.subject }}
         </el-col>
         <el-col :span="1">
           <el-button type="primary" size="mini" class="btn" icon="el-icon-edit-outline" @click="editSemesterInfo" circle></el-button>
         </el-col>
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
    editSemesterInfo: function () {
      this.$router.push('/edit-semester-info')
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
