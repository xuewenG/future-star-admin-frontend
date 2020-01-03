<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="已参与校友名单"/>
      <el-divider></el-divider>
      <el-input class='search-input' placeholder="请输入搜索内容"/>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-divider></el-divider>
      <el-table
        :data="participantsData"
        stripe>
        <el-table-column
          prop="name"
          align="center"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="gender"
          align="center"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="phone_number"
          align="center"
          label="联系电话">
        </el-table-column>
        <el-table-column
          prop="wx"
          align="center"
          label="微信号">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInfo()"
              circle>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="5">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'ShowActivityParticipantsPage',
  data () {
    return {
      currentPage: 1,
      participantsData: [
        {
          name: '张邦鑫',
          gender: '男',
          phone_number: '13456327654',
          wx: '11111111'
        },
        {
          name: '张邦鑫',
          gender: '男',
          phone_number: '23456327654',
          wx: '22222222'
        },
        {
          name: '张邦鑫',
          gender: '男',
          phone_number: '33456327654',
          wx: '33333333'
        },
        {
          name: '张邦鑫',
          gender: '男',
          phone_number: '43456327654',
          wx: '44444444'
        },
        {
          name: '张邦鑫',
          gender: '男',
          phone_number: '53456327654',
          wx: '55555555'
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    showAllInfo () {
      this.$router.push('/show-all-information')
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
  .search-input {
    width: 340px;
    margin-right: 30px;
    margin-left: 130px;
  }

  .pagination {
    margin-left: 430px;
  }
</style>
