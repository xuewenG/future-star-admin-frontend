<template>
  <div>
    <h4 v-if="count === 0">暂无待开课班级</h4>
    <el-col :span="12" v-for="item in classes" v-show="item.state===2" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="16">
            {{ item.name }}
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-check" @click="startClass(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-more" @click="lookOverClassDetail(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="editClassInfo(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-s-custom" @click="lookOverStudentInClass(item)" circle></el-button>
          </el-col>
        </el-row>
        <el-row class="info">
          起止日期：{{ item.start_time }}—— {{ item.end_time }}
        </el-row>
        <el-row class="info">
          招生人数：{{ item.current_people_number }} / {{ item.people_number_limit }}
        </el-row>
        <el-row class="info">
          班级状态：待开课
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
  name: 'WaitForStartClasses',
  created () {
    if (this.classes) {
      for (let i = 0; i < this.classes.length; i++) {
        if (this.classes[i].state === 2) {
          this.count++
        }
      }
    }
  },
  props: {
    classes: [Array, String]
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    startClass: function (currentClass) {
      let that = this
      let url = '/clazz/clazz/' + currentClass.id
      that.axios.put(url, {
        state: 3
      }).then(async function (response) {
        if (response.data.code === '2000') {
          currentClass.state = 3
          await that.$store.dispatch('changeClasses', that.classes)
          that.$message({
            type: 'success',
            message: '开课成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '网络繁忙，请稍后重试',
          duration: 2000
        })
      })
    },
    editClassInfo: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/edit-class-info')
    },
    lookOverClassDetail: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/class-detail')
    },
    lookOverStudentInClass: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/student-in-class')
    }
  },
  watch: {
    classes () {
      this.count = 0
      for (let i = 0; i < this.classes.length; i++) {
        if (this.classes[i].state === 2) {
          this.count++
        }
      }
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
