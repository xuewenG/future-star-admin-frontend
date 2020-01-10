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
        <!--        <el-table-column-->
        <!--          align="center"-->
        <!--          label="操作">-->
        <!--            <el-button-->
        <!--              type="primary"-->
        <!--              size="small"-->
        <!--              icon="el-icon-more"-->
        <!--              @click="showAllInfo()"-->
        <!--              circle>-->
        <!--            </el-button>-->
        <!--        </el-table-column>-->
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="prev, pager, next"
        :page-count="totalPage">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'ShowAlumniEditHistoryPage',
  data () {
    return {
      currentPage: 1,
      totalPage: 1,
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
          time: '2020年1月10日19:31:29'
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>
  .history-table {
    width: 90%;
    margin: auto;
  }

  .el-pagination {
    text-align: center;
  }
</style>
