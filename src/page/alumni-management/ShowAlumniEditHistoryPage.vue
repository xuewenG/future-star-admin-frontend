<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="资料详情"/>
      <el-divider/>
      <el-table
        class="history-table"
        :data="tableData"
        stripe>
        <el-table-column
          prop="id"
          align="center"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="时间">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInfo()"
              circle>
            </el-button>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-pagination
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="10">
          </el-pagination>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'ShowAlumniEditHistoryPage',
  data () {
    return {
      currentPage: 1,
      tableData: [
        {
          id: '1',
          time: '2020年1月3日14:36:18'
        },
        {
          id: '2',
          time: '2020年1月3日14:36:24'
        },
        {
          id: '3',
          time: '2020年1月3日14:36:30'
        },
        {
          id: '4',
          time: '2020年1月3日14:36:37'
        },
        {
          id: '5',
          time: '2020年1月3日14:36:41'
        },
        {
          id: '6',
          time: '2020年1月3日14:37:13'
        },
        {
          id: '7',
          time: '2020年1月3日14:37:21'
        },
        {
          id: '8',
          time: '2020年1月3日14:37:41'
        },
        {
          id: '9',
          time: '2020年1月3日14:38:02'
        },
        {
          id: '10',
          time: '2020年1月3日14:41:13'
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    showAllInfo () {
      this.$router.push('/show-history-information')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
  .history-table {
    width: 90%;
    margin: auto;
  }
</style>
