<template>
  <el-container v-if="semesterState==='0'">
    <el-header>
      <el-row>
        <h3>暂无进行中学期，点击下方按钮添加新学期</h3>
      </el-row>
    </el-header>
    <el-main>
      <router-link to="/add-semester">
        <el-image :src="require('../../assets/addIcon.png')">
        </el-image>
      </router-link>
    </el-main>
  </el-container>
  <el-container v-else-if="semesterState==='1'">
    <el-header>
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <h2>{{ semester }}</h2>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini" class="btn" icon="el-icon-more" @click="lookOverSemesterDetail()" circle></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main-in-enrollment">
      <el-tabs v-model="activeName">
        <el-tab-pane label="未开放" name="first">
          <unopened-classes></unopened-classes>
        </el-tab-pane>
        <el-tab-pane label="招生中" name="second">
          <enrolling-classes></enrolling-classes>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import UnopenedClasses from '../class/ClassesUnopened'
import EnrollingClasses from '../class/ClassesEnrolling'
export default {
  name: 'EnrollmentManagementPage',
  components: {
    UnopenedClasses,
    EnrollingClasses
  },
  data () {
    return {
      activeName: 'first',
      semester: '第九期未来之星创新院',
      semesterState: '1'
    }
  },
  methods: {
    lookOverSemesterDetail: function () {
      this.$router.push('/semester-detail')
    }
  }
}
</script>

<style scoped>
  .main-in-enrollment {
    padding: 0;
    margin: 0;
  }

  .el-header {
    padding: 0;
  }
</style>
