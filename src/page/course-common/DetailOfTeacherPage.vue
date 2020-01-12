<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack()" content="讲师信息"></el-page-header>
    </el-header>
    <el-main>
      <el-divider content-position="center">讲师信息</el-divider>
      <el-col :span="8" shadow="never">
        <el-card shadow="never">
          <el-row slot="header" type="flex" align="middle">
            <el-col :span="3">
              <el-avatar :src="teacher.avatar" size="small"></el-avatar>
            </el-col>
            <el-col :span="18">
              {{ teacher.name }}
            </el-col>
            <el-col :span="3" :push="1">
              <el-button size="small" type="primary" class="el-icon-edit-outline" @click="editTeacherInfo" circle></el-button>
            </el-col>
          </el-row>
          <el-row>
            头衔：{{ teacher.title }}
          </el-row>
          <el-row>
            简介： {{ teacher.introduction }}
          </el-row>
          <el-row>
            联系方式： {{ teacher.contact_way }}
          </el-row>
        </el-card>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DetailOfTeacherPage',
  data () {
    return {
      course: '',
      teacher: {}
    }
  },
  created () {
    if (this.course) {
      this.course = this.$store.getters.getCurrentCourse
      this.teacher = this.course.teacher
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    editTeacherInfo: async function () {
      await this.$store.dispatch('changeCurrentCourse', this.course)
      await this.$router.push('/edit-teacher-info')
    }
  }
}
</script>

<style scoped>
  .el-card {
    margin: 10px;
  }
</style>
