<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改历史详情"/>
      <el-divider/>
      <el-card v-for="(item) in info"  :key="item.id" class="info-card" shadow="always">
        <el-form class="info-table" label-width="130px">
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名：">
                {{item.name}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别：">
                {{item.gender}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="生日：">
                {{item.birthday}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="联系电话：">
                {{item.phone_number}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="微信：">
                {{item.wx}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱：">
                {{item.email}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="城市：">
                {{item.city}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最高学历：">
                {{item.education}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="毕业院校：">
                {{item.school}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="创业前所在公司：">
                {{item.previous_company}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创业前职位：">
                {{item.previous_position}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="当前公司名称：">
                {{item.company_name}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司官网：">
                {{item.website}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司公众号：">
                {{item.wx_public}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="成立时间：">
                {{item.create_time}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司所在城市：">
                {{item.company_city}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司总人数：">
                {{item.employee_number}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="职位：">
                {{item.create_time}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司简介：">
                {{item.introduction}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运营数据：">
                {{item.company_data}}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="收入规模：">
                {{item.income_scale}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="融资情况：">
                {{item.financing_situation}}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="当前估值：">
                {{item.value_of_assessment}}
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
  name: 'ShowAlumniHistoryInformationPage',
  data () {
    return {
      info: [
        {
          id: '1',
          name: '郑小鸽',
          gender: '男',
          birthday: '2019/10/01',
          phone_number: '15256530000',
          wx: '6028',
          email: 'zls@gugugu.com',
          city: '福建',
          education: 'phD',
          school: 'HFUT',
          previous_company: '阿里',
          previous_position: 'CWO',
          company_name: '郑总的公司',
          website: 'zheng.com',
          wx_public: 'zheng',
          create_time: '2020-01-01',
          company_city: '合肥',
          employee_number: '6',
          position: 'CEO',
          introduction: '这是郑总的公司',
          company_data: '10E',
          income_scale: '收入1E',
          financing_situation: 'others',
          value_of_assessment: '100E'
        }
      ]
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .info-card {
    width: 70%;
    margin: auto;
  }

  .info-table {
    margin: 40px 20px;
  }
</style>
