<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="资料详情" />
      <el-divider />
      <el-card
        v-for="item in info"
        :key="item.id"
        class="info-card"
        shadow="always"
      >
        <el-form class="info-table" label-width="130px">
          <el-row>
            <el-col :span="4" :offset="8">
              <el-button type="primary" icon="el-icon-edit" @click="editInfo()"
                >编辑</el-button
              >
            </el-col>
            <el-col :span="4">
              <el-button
                type="primary"
                icon="el-icon-time"
                @click="showHistory()"
                >查看编辑历史</el-button
              >
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名：">
                {{ item.name }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别：">
                {{ item.gender }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="生日：">
                {{ item.birthday }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="联系电话：">
                {{ item.phone_number }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="微信：">
                {{ item.wx }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱：">
                {{ item.email }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="城市：">
                {{ item.city }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="最高学历：">
                {{ item.education }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="毕业院校：">
                {{ item.school }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="创业前所在公司：">
                {{ item.previous_company }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创业前职位：">
                {{ item.previous_position }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">
              <el-form-item label="当前公司名称：">
                {{ item.company_name }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司官网：">
                {{ item.website }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司公众号：">
                {{ item.wx_public }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="成立时间：">
                {{ item.create_time }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司所在城市：">
                {{ item.company_city }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司总人数：">
                {{ item.employee_number }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="职位：">
                {{ item.create_time }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="公司简介：">
                {{ item.introduction }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运营数据：">
                {{ item.company_data }}
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="收入规模：">
                {{ item.income_scale }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="融资情况：">
                {{ item.financing_situation }}
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="当前估值：">
                {{ item.value_of_assessment }}
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
  name: 'ShowAlumniInformationPage',
  data () {
    return {
      info: []
    }
  },
  created () {
    let that = this
    let results = that.$store.getters.getInfoOfAnAlumni
    if (results) {
      that.info[0] = {
        id: results.id,
        name: results.name,
        gender: results.gender,
        birthday: results.birthday,
        phone_number: results.phone_number,
        wx: results.wx,
        email: results.email,
        city: results.city,
        education: results.education,
        school: results.school,
        previous_company: results.previous_company,
        previous_position: results.previous_position,
        company_name: results.company.name,
        website: results.company.website,
        wx_public: results.company.wx_public,
        create_time: results.company.create_time,
        company_city: results.company.city,
        employee_number: results.company.number_employee,
        position: results.company.position,
        introduction: results.company.introduction,
        company_data: results.company.company_data,
        income_scale: results.company.income_scale,
        financing_situation: results.company.financing_situation,
        value_of_assessment: results.company.value_of_assessment
      }
    }
    that.$forceUpdate()
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    editInfo () {
      this.$router.push('/edit-alumni-information')
    },
    showHistory () {
      this.$router.push('/show-edit-history')
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
