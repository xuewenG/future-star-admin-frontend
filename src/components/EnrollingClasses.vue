<template>
  <div>
    <h4 v-if="classes.length === 0">暂无招生中班级</h4>
    <el-card v-for="(item) in classes" :key="item.id">
      <div slot="header">
        <span>{{ item.className }}</span>
        <el-button type="text"></el-button>
        <el-button type="text">删除</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">查看</el-button>
        <el-button type="text">结束</el-button>
      </div>
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
