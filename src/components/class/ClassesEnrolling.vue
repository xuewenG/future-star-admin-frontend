<template>
  <div>
    <h4 v-if="count === 0">暂无招生中班级</h4>
    <el-col :span="12" v-for="item in classes" v-show="item.state===1" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="14">
            {{ item.name }}
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-check" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-more" @click="lookOverClassDetail(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="editClassInfo(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-s-custom" @click="enrollmentAudit(item)" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="danger" size="small" icon="el-icon-delete" circle></el-button>
          </el-col>
        </el-row>
        <el-row class="info">
          起止日期：{{ item.start_time }}—— {{ item.end_time }}
        </el-row>
        <el-row class="info">
          招生人数：{{ item.current_people_number }} / {{ item.people_number_limit }}
        </el-row>
        <el-row class="info">
          班级状态：未开放
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
  name: 'EnrollingClasses',
  created () {
    this.classes = this.$store.getters.getClasses
    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes[i].state === 1) {
        this.count++
      }
    }
  },
  data () {
    return {
      count: 0,
      classes: [
        {
          id: '2',
          name: '素质教育专题班',
          introduction: '这里是一个加了长文本省略号替代的班级介绍',
          start_time: '2019/12/20',
          end_time: '2019/12/21',
          current_people_number: '0',
          people_number_limit: '15',
          state: 0
        }
      ]
    }
  },
  methods: {
    editClassInfo: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/edit-class-info')
    },
    lookOverClassDetail: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/class-detail')
    },
    enrollmentAudit: async function (currentClass) {
      await this.$store.dispatch('changeCurrentClass', currentClass)
      await this.$router.push('/enrollment-audit')
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
