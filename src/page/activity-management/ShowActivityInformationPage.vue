<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="活动详情"/>
      <el-divider/>
      <el-card v-for="(item) in info"  :key="item.id" class="info-card" shadow="always">
        <el-form label-width="130px">
          <el-row>
            <el-col :span="4" :offset="11">
              <el-button type="primary" icon="el-icon-edit" @click="editDetails()">编辑</el-button>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动标题：">
                {{item.name}}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动项目：">
                {{item.project}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动时间：">
                {{item.activity_time}}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动地点：">
                {{item.activity_site}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="限制人数：">
                {{item.ceiling}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收费情况：">
                {{item.charge}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="活动内容描述：">
                {{item.activity_describe}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="主办方信息：">
                {{item.sponsor}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主办方联系方式：">
                {{item.sponsor_phone}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="报名截止时间：">
                {{item.deadline}}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ShowActivityInformationPage',
  data () {
    return {
      info: [
        {
          id: '1',
          name: 'xx讲座',
          project: 'xx讲座',
          activity_time: '2020-02-01',
          activity_site: 'hf',
          ceiling: '20',
          charge: '100/人',
          activity_describe: '平平无奇的活动',
          sponsor: '郑小鸽',
          sponsor_phone: '1231231234',
          deadline: '2020-01-23'
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    editDetails () {
      this.$router.push('/edit-activity')
    }
  }
}
</script>

<style scoped>
  .info-card {
    width: 80%;
    margin: auto;
  }
</style>
