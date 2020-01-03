<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改校友信息"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-form class="activity-table" label-width="150px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="性别：">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="生日：">
                <el-date-picker
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="电话：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="微信：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="所处城市：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最高学位：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="毕业院校：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="创业前所处公司：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创业前职位：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="公众号：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="成立时间：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="公司所处城市：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="员工数目：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
          <el-row>
            <el-col span="8">
              <el-form-item label="公司：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col span="16">
              <el-form-item label="官网：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
            <el-col :span="8">
              <el-form-item label="所处职位：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="公司简介：">
            <el-input
              type="textarea"
              :rows="2">
            </el-input>
          </el-form-item>
          <el-row>
            <el-col :span="6">
              <el-form-item label="运营数据：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="收入规模：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="融资情况：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="当前估值：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary">确认修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EditAlumniInformationPage',
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .activity-card {
    width: 90%;
    margin: auto;
  }

  .activity-table {
    margin: 20px;
  }
</style>
