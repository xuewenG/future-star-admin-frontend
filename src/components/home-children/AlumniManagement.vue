<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="4">
          <el-select class="selection" v-model="semester" @change="findAllClass()" filterable placeholder="请选择学期">
            <el-option
              v-for="item in semesterOptions"
              :key="item.semester"
              :label="item.label"
              :value="item.semester">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select class="selection" v-model="clazz" filterable placeholder="请选择班级">
            <el-option
              v-for="item in clazzOptions"
              :key="item.clazz"
              :label="item.label"
              :value="item.clazz">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input class='search-input' v-model="keyword" placeholder="请输入搜索内容"/>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
        </el-col>
      </el-row>
      <el-divider/>
      <el-table
        :data="tableData"
        stripe
        class="info-table">
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
          :width="shortInfoWidth">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-more"
              @click="showAllInfo()"
              circle>
            </el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
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
        @current-change="handleCurrentChange"
        :current-page="currentAlumniPage"
        layout="prev, pager, next"
        :page-count="totalPage">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'AlumniManagementPage',
  data () {
    return {
      shortInfoWidth: 115,
      longInfoWidth: 170,
      emailWidth: 210,
      currentAlumniPage: 1,
      currentSemesterPage: 1,
      currentClassPage: 1,
      totalPage: 1,
      page_size: 20,
      keyword: null,
      clazz: null,
      semester: null,
      tableData: [],
      semesterOptions: [],
      clazzOptions: []
    }
  },
  created () {
    this.findAllAlumni()
    this.findAllSemester()
  },
  methods: {
    findAllAlumni: function () {
      let that = this
      let params = {
        page_size: that.page_size,
        page: that.currentAlumniPage
      }
      that.axios.get('/student/student', { params }).then(function (response) {
        if (response.data.code === '2000') {
          that.tableData = response.data.data.results
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].gender === 0) {
              that.tableData[i].gender = '男'
            } else {
              that.tableData[i].gender = '女'
            }
          }
          that.$forceUpdate()
        }
      })
    },
    findAllSemester: function () {
    },
    clazzClear: function () {
    },
    search () {
    },
    handleCurrentChange (currentAlumniPage) {
      this.currentAlumniPage = currentAlumniPage
      this.findAllAlumni()
    },
    deleteAlumni (index) {
      this.tableData.splice(index, 1)
    },
    showAllInfo () {
      this.$router.push('/show-all-information')
    }
  }
}
</script>

<style scoped>
  .info-table {
    margin: auto;
  }

  .selection {
    margin-right: 20px;
  }

  .search-input {
    display: inline-block;
    width: 350px;
    margin-right: 20px;
  }

  .pagination {
    margin-left: 250px;
  }
</style>
