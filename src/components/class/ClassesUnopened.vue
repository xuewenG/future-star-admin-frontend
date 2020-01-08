<template>
  <div>
    <h4 v-if="classes.length === 0">暂无待招生班级</h4>
    <el-col :span="12" v-for="item in classes" v-show="item.state===2" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="16">
            {{ item.name }}
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-check" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-more" @click="lookOverClassDetail" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="editClassInfo" circle></el-button>
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
  name: 'UnopenedClasses',
  created () {
    this.classes = this.$store.getters.getClasses
  },
  data () {
    return {
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
    editClassInfo: function () {
      this.$router.push('/edit-class-info')
    },
    lookOverClassDetail: function () {
      this.$router.push('/class-detail')
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
    margin: 0 0 15px;
  }

  h4 {
    color: #707070;
  }
</style>
