<template>
  <div>
    <h4 v-if="classes.length === 0">暂无招生中班级</h4>
    <el-col :span="12" v-for="(item) in classes" :key="item.id">
      <el-card>
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="14">
            {{ item.className }}
          </el-col>
          <el-col :span="2">
            <el-button type="success" size="small" icon="el-icon-check" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-more" @click="lookOverClassDetail" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="editClassInfo" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-s-custom" @click="enrollmentAudit" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="danger" size="small" icon="el-icon-delete" circle></el-button>
          </el-col>
        </el-row>
        <el-row>
          起止日期：{{ item.classStartTime }}—— {{ item.classEndTime }}
        </el-row>
        <el-row>
          招生人数：{{ item.currentAmountOfStudent }} / {{ item.capacity }}
        </el-row>
        <el-row>
          班级状态：{{ item.state }}
        </el-row>
        <el-row>
          班级简介：{{ item.classIntroduction | ellipsis }}
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'EnrollingClasses',
  data () {
    return {
      classes: [
        {
          id: '2',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '0',
          capacity: '15',
          state: '招生中'
        },
        {
          id: '1',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '0',
          capacity: '15',
          state: '招生中'
        },
        {
          id: '3',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '0',
          capacity: '15',
          state: '招生中'
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
    },
    enrollmentAudit: function () {
      this.$router.push('/enrollment-audit')
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
</style>
