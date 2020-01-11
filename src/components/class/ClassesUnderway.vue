<template>
  <div>
    <el-col :span="12" v-for="item in classes" v-show="item.state===3" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="12">
            {{ item.name }}
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="endClass(item)" round>班级结课</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="lookOverClassDetail(item)" round>班级详情</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="enrollmentAudit(item)" round>毕业审核</el-button>
          </el-col>
        </el-row>
        <el-row class="info">
          起止日期：{{ item.start_time }}—— {{ item.end_time }}
        </el-row>
        <el-row class="info">
          招生人数：{{ item.current_people_number }} / {{ item.people_number_limit }}
        </el-row>
        <el-row class="info">
          班级状态：进行中
        </el-row>
        <el-row class="info">
          班级简介：{{ item.introduction | ellipsis }}
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'UnderwayClasses',
  props: {
    classes: [Array, String]
  },
  methods: {
    endClass: function (currentClass) {
      let that = this
      let url = '/clazz/clazz/' + currentClass.id
      that.axios.put(url, {
        state: 4
      }).then(async function (response) {
        if (response.data.code === '2000') {
          currentClass.state = 4
          await that.$store.dispatch('changeClasses', that.classes)
          that.$message({
            type: 'success',
            message: '关闭课程成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    lookOverClassDetail: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/class-detail')
    },
    enrollmentAudit: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/graduation-audit')
    }
  },
  filters: {
    ellipsis (text) {
      if (!text) return ''
      if (text.length > 30) {
        return text.slice(0, 30) + '......'
      }
      return text
    }
  }
}
</script>

<style scoped>
  div {
    padding: 0;
    margin: 0;
  }

  .el-card {
    margin: 10px;
  }

  .el-button {
    float: right;
  }

  .info {
    margin: 0 0 8px;
  }

  h4 {
    color: #707070;
  }
</style>
