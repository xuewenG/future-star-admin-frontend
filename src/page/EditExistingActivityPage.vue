<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改活动详情"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-form class="activity-table" label-width="150px">
          <el-form-item class="activity-title" label="活动标题：">
            <el-input class="short-text"/>
          </el-form-item>
          <el-form-item label="活动项目：">
            <el-input class="short-text"/>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动时间：">
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动地点：">
                <el-input class="short-text"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="面向人群：">
                <el-input class="short-text"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="限制人数：">
                <el-input class="short-text"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收费情况：">
                <el-input class="short-text"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="活动内容描述：">
            <el-input class="long-text" type="textarea"/>
          </el-form-item>
          <el-form-item label="组织单位信息：">
            <el-input class="long-text" type="textarea"/>
          </el-form-item>
          <el-form-item label="组织单位联系方式：">
            <el-input class="long-text" type="textarea"/>
          </el-form-item>
          <el-form-item label="报名截止时间：">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </el-form-item>
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
  name: 'EditExistingActivityPage',
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .activity-card {
    width: 70%;
    margin: auto;
  }

  .activity-table {
    margin: 40px 20px;
  }
</style>
