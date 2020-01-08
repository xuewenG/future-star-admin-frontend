<template>
  <div>
    <h4 v-if="classes.length === 0">暂无已结束班级</h4>
    <el-col :span="12" v-for="(item) in classes" :key="item.id">
      <el-card  shadow="never">
        <el-row slot="header" type="flex" align="middle">
          <el-col :span="16">
            {{ item.className }}
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-more" @click="lookOverClassDetail" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-edit-outline" @click="editClassInfo" circle></el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" icon="el-icon-s-custom" @click="lookOverStudentInClass" circle></el-button>
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
  name: 'EndedClasses',
  data () {
    return {
      classes: [
        {
          id: '2',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '13',
          capacity: '15',
          state: '已结束'
        },
        {
          id: '1',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '12',
          capacity: '15',
          state: '已结束'
        },
        {
          id: '3',
          className: '素质教育专题班',
          classIntroduction: '这里是一个加了长文本省略号替代的班级介绍',
          classStartTime: '2019/12/20',
          classEndTime: '2019/12/21',
          currentAmountOfStudent: '11',
          capacity: '15',
          state: '已结束'
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
    lookOverStudentInClass: function () {
      this.$router.push('/student-in-class')
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
