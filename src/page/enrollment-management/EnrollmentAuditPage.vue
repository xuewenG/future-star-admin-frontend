<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="报名审核"></el-page-header>
      <el-divider content-position="center">报名审核界面</el-divider>
      <el-row>
        <el-col :span="8" :push="8">
          <el-input class='search-input' placeholder="请输入搜索内容"/>
        </el-col>
        <el-col :span="4" :push="8">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-table
        :data="tableData"
        stripe>
        <el-table-column
          prop="name"
          align="center"
          label="姓名"
          :width="shortInfoWidth">
        </el-table-column>
        <el-table-column
          prop="gender"
          align="center"
          label="性别"
          :width="shortInfoWidth">
        </el-table-column>
        <el-table-column
          prop="birthday"
          align="center"
          label="出生日期"
          :width="longInfoWidth">
        </el-table-column>
        <el-table-column
          prop="phone_number"
          align="center"
          label="联系电话"
          :width="longInfoWidth">
        </el-table-column>
        <el-table-column
          prop="wx"
          align="center"
          label="微信号"
          :width="longInfoWidth">
        </el-table-column>
        <el-table-column
          prop="email"
          align="center"
          label="邮箱"
          :width="emailWidth">
        </el-table-column>
        <el-table-column
          prop="city"
          align="center"
          label="所在城市"
          :width="shortInfoWidth">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          :width="operationWidth">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInfo"
              circle>
            </el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-check"
              @click="deleteAlumni(scope.$index)"
              circle>
            </el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-close"
              @click="deleteAlumni(scope.$index)"
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
        :total="12">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'EnrollmentAuditPage',
  data () {
    return {
      shortInfoWidth: 115,
      longInfoWidth: 170,
      emailWidth: 210,
      operationWidth: 200,
      currentPage: 1,
      clazz: '',
      semester: '',
      tableData: [
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '1',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '2',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '3',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '4',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '5',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '6',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '7',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '8',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '9',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '10',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '11',
          email: 'edstars@100tal.com',
          city: '北京'
        },
        {
          name: '张邦鑫',
          gender: '男',
          birthday: '1980/10/01',
          phone_number: '12345678901',
          wx: '12',
          email: 'edstars@100tal.com',
          city: '北京'
        }
      ],
      semesterOptions: [
        {
          semester: '1',
          label: '第一期'
        },
        {
          semester: '2',
          label: '第二期'
        },
        {
          semester: '3',
          label: '第三期'
        }
      ],
      clazzOptions: [
        {
          clazz: '1',
          label: '素质教育专题班'
        },
        {
          clazz: '2',
          label: '教育信息化专题班'
        }
      ]
    }
  },
  methods: {
    deleteAlumni: function (index) {
      this.tableData.splice(index, 1)
    },
    showAllInfo: function () {
      this.$router.push('/show-all-information')
    },
    handleSizeChange: function (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange: function (val) {
      console.log(`当前页: ${val}`)
    },
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .search-input {
    display: inline-block;
    width: 350px;
    margin-right: 20px;
  }

  .pagination {
    margin-left: 250px;
  }

  .el-main {
    margin: 0 auto;
  }
</style>
