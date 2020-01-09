<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack()" content="讲师信息"></el-page-header>
    </el-header>
    <el-main>
      <el-divider content-position="center">讲师信息</el-divider>
      <el-card v-for="teacher in teachers" :key="teacher.id">
        <el-row>
          讲师名： {{ teacher.name }}
        </el-row>
        <el-row>
          讲师头像: {{ teacher.avatar }}
        </el-row>
        <el-row>
          讲师头衔：{{ teacher.title }}
        </el-row>
        <el-row>
          讲师简介： {{ teacher.teacherBriefIntroduction }}
        </el-row>
        <el-row>
          讲师联系方式： {{ teacher.teacherContactInformation }}
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DetailOfTeacherPage',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
