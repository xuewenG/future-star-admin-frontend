<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack" content="修改讲师信息"></el-page-header>
    </el-header>
    <el-main>
      <el-card shadow="never">
        <el-form>
          <el-row>
            <el-form-item label="讲师名：">
              <el-input v-model="teacher.name"></el-input>
            </el-form-item>
          </el-row>
          <el-form-item label="讲师头像：">
            <el-input v-model="teacher.avatar"></el-input>
          </el-form-item>
          <el-row>
            <el-form-item label="讲师头衔：">
              <el-input v-model="teacher.title"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="讲师简介：">
              <el-input v-model="teacher.introduction"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="讲师联系方式：">
              <el-input v-model="teacher.contact_way"></el-input>
            </el-form-item>
          </el-row>
          <el-form-item>
            <el-row type="flex" justify="space-around" class="operation-button">
              <el-col :span="3">
                <el-button type="primary" @click="saveTeacherInfo">保存</el-button>
              </el-col>
              <el-col :span="3">
                <el-button @click="clearText">清空</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EditTeacherInfoPage',
  data () {
    return {
      teacher:
        {
          id: '1',
          name: '陈某人',
          avatar: 'http://dmimg.5054399.com/allimg/pkm/pk/22.jpg',
          title: '计蒜鸽UFO',
          introduction: 'I come from university',
          contact_way: '1981468862@qq.com'
        }
    }
  },
  created () {
    let course = this.$store.getters.getCurrentCourse
    this.teacher = course.teacher
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.teacher.name = ''
      this.teacher.avatar = ''
      this.teacher.title = ''
      this.teacher.introduction = ''
      this.teacher.contact_way = ''
    },
    saveTeacherInfo: function () {
      let that = this
      let url = '/course/teacher/' + that.teacher.id
      that.axios.put(url, {
        name: that.teacher.name,
        avatar: that.teacher.avatar,
        title: that.teacher.title,
        introduction: that.teacher.introduction,
        contact_way: that.teacher.contact_way
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          that.$message({
            type: 'error',
            message: '请求出错'
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器内部错误'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
