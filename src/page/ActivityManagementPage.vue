<template>
  <el-container>
    <el-header>
      <home-page/>
    </el-header>
    <el-main>
      <el-divider/>
      <router-link to="/create-activity">
        <img src="../assets/addIcon.png">
      </router-link>
      <el-divider/>
      <el-table :data="tableData">
        <el-row>
          <el-col :span="4">
            <el-table-column prop="date" label="活动创建日期"/>
          </el-col>
          <el-col :span="4">
            <el-table-column prop="name" label="活动名称"/>
          </el-col>
          <el-col :span="8">
            <el-table-column prop="status" label="状态"/>
          </el-col>
          <el-col :span="8">
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-col>
        </el-row>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ActivityManagementPage',
  data () {
    return {
      tableData: [{
        date: '2019-11-02',
        name: 'XX一日游',
        status: '正在报名中'
      }, {
        date: '2019-12-04',
        name: 'XX讲座',
        status: '正在进行中'
      }, {
        date: '2019-12-18',
        name: 'XX马拉松',
        status: '已结束'
      }]
    }
  }
}
</script>

<style scoped>

</style>
