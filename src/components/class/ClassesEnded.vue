<template>
  <div>
    <el-col :span="12" v-for="item in classes" v-show="item.state===4" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="16">
            {{ item.name }}
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="lookOverClassDetail(item)" round>班级详情</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" size="small" @click="lookOverStudentInClass(item)" round>班级学员</el-button>
          </el-col>
        </el-row>
        <el-col :span="12">
          <el-row class="info">
            起止日期：{{ item.start_time }}—— {{ item.end_time }}
          </el-row>
          <el-row class="info">
            招生人数：{{ item.current_people_number }} / {{ item.people_number_limit }}
          </el-row>
          <el-row class="info">
            班级状态：已结束
          </el-row>
          <el-row class="info">
            班级简介：{{ item.introduction | ellipsis }}
          </el-row>
        </el-col>
        <el-col :span="12" align="center">
          <el-row class="class-image">
            <img :src="item.image" width="160px;">
          </el-row>
        </el-col>
      </el-card>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'EndedClasses',
  props: {
    classes: [Array, String]
  },
  methods: {
    lookOverClassDetail: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/class-detail')
    },
    lookOverStudentInClass: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/student-in-class')
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

  .class-image {
    margin-bottom: 3%;
  }
</style>
