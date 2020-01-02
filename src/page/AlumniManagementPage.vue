<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="4">
          <el-select class="selection" v-model="semester" filterable placeholder="请选择学期">
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
        <el-col :span="4">
          <el-select class="selection" v-model="course" filterable placeholder="请选择课程">
            <el-option
              v-for="item in courseOptions"
              :key="item.course"
              :label="item.label"
              :value="item.course">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input class='search-input' placeholder="请输入搜索内容"/>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-divider/>
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
  name: 'AlumniManagementPage',
  data () {
    return {
      shortInfoWidth: 115,
      longInfoWidth: 170,
      emailWidth: 210,
      currentPage: 1,
      clazz: '',
      semester: '',
      course: '',
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
      ],
      courseOptions: [
        {
          course: '1',
          label: '初心课'
        },
        {
          course: '2',
          label: '未来课'
        },
        {
          course: '3',
          label: '创业课'
        }
      ]
    }
  },
  methods: {
    deleteAlumni (index) {
      this.tableData.splice(index, 1)
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
