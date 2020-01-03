<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改学期信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-form class="activity-table" label-width="150px">
          <el-form-item class="activity-title" label="学期主题：">
            <el-input
              v-model="semester.gist"
              placeholder="请输入本学期主题"
              class="short-text">
            </el-input>
          </el-form-item>
          <el-form-item label="学期介绍：">
            <el-input
              v-model="semester.introduction"
              placeholder="请输入本学期介绍"
              :autosize="{ minRows: 6, maxRows: 30}"
              class="long-text"
              type="textarea">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ModifySemesterPage',
  data () {
    return {
      semester: {
        gist: '',
        introduction: ''
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
