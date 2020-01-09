<template>
  <el-container>
    <el-main>
      <div>
        <el-page-header @back="goBack()" content="资料详情"/>
        <el-divider></el-divider>
      </div>
      <el-card
        v-for="item in info"
        :key="item.id"
        class="info-card"
        shadow="always">
        <el-row>
          <el-col :span="24" class="center-position">
            <div class="block">
              <el-avatar :size="130" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2449839064,3509439903&fm=15&gp=0.jpg">
              </el-avatar>
            </div>
          </el-col>
        </el-row>
        <el-form class="info-table" label-width="130px">
          <div class="line">
            <el-divider></el-divider>
          </div>
          <div class="description">- 个人信息 -</div>
          <el-row class="top-distance">
            <el-col :span="width" :offset="2">
              <i class="el-icon-user">&nbsp;姓名：</i>
              <label>{{ item.name }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-male">&nbsp;性别：</i>
              <label>{{ item.gender }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-timer">&nbsp;生日：</i>
              <label>{{ item.birthday }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-mobile-phone">&nbsp;电话：</i>
              <label>{{ item.phone_number }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-document">&nbsp;最高学历：</i>
              <label>{{ item.education }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-school">&nbsp;毕业院校：</i>
              <label >{{ item.school }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-location-information">&nbsp;城市：</i>
              <label>{{ item.city }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-chat-dot-round">&nbsp;微信：</i>
              <label>{{ item.wx }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-edit-outline">&nbsp;邮箱：</i>
              <label >{{ item.email }}</label>
            </el-col>
          </el-row>
          <div class="line">
            <el-divider></el-divider>
          </div>
          <el-row class="bottom-distance">
            <el-col :span="24">
              <div class="description">- 创业前所在公司 -</div>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="10" :offset="4">
              <i class="el-icon-office-building">&nbsp;公司名称：</i>
              <label>{{ item.previous_company }}</label>
            </el-col>
            <el-col :span="10">
              <i class="el-icon-trophy">&nbsp;前职位：</i>
              <label>{{ item.previous_position }}</label>
            </el-col>
          </el-row>
          <div class="line">
            <el-divider></el-divider>
          </div>
          <el-row class="bottom-distance">
            <el-col :span="24">
              <div class="description">- 当前公司 -</div>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-star-off">&nbsp;名称：</i>
              <label>{{ item.company_name }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-house">&nbsp;官网：</i>
              <label>{{ item.website }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-discount">&nbsp;公众号：</i>
              <label >{{ item.wx_public }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-alarm-clock">&nbsp;成立时间：</i>
              <label>{{ item.create_time }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-place">&nbsp;所在城市：</i>
              <label>{{ item.company_city }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-data-analysis">&nbsp;总人数：</i>
              <label >{{ item.employee_number }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-trophy">&nbsp;职位：</i>
              <label>{{ item.position }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-news">&nbsp;融资情况：</i>
              <label>{{ item.financing_situation }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-coin">&nbsp;当前估值：</i>
              <label >{{ item.value_of_assessment }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-money">&nbsp;收入规模：</i>
              <label>{{ item.income_scale }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-shopping-cart-full">&nbsp;运营数据：</i>
              <label >{{ item.company_data }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-reading">&nbsp;公司简介：</i>
              <label>{{ item.introduction }}</label>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :span="24" class="center-position">
            <el-button-group>
              <el-button type="primary" icon="el-icon-edit" @click="editInfo()">
                编辑
              </el-button>
              <el-button type="primary" icon="el-icon-time" @click="showHistory()">
                编辑历史
              </el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ShowAlumniInformationPage',
  data () {
    return {
      info: [],
      width: 7,
      offset: 2
    }
  },
  created () {
    let that = this
    let results = that.$store.getters.getInfoOfAnAlumni
    if (results && results.company) {
      let education = results.education
      if (education === 'PhD') {
        education = '博士'
      } else if (education === 'MBA') {
        education = '硕士'
      } else if (education === 'Bachelor') {
        education = '本科'
      } else if (education === 'College') {
        education = '专科'
      } else {
        education = '其他'
      }
      let financing = results.company.financing_situation
      if (financing === 'N') {
        financing = '尚未获得融资'
      } else if (financing === 'seed/angel') {
        financing = '已完成种子/天使融资'
      } else if (financing === 'pre-A') {
        financing = '已完成pre-A轮融资'
      } else if (financing === 'A') {
        financing = '已完成A轮融资'
      } else if (financing === 'refuse') {
        financing = '不方便透露'
      } else {
        financing = '其他'
      }
      that.info[0] = {
        id: results.id,
        name: results.name,
        gender: results.gender,
        birthday: results.birthday,
        phone_number: results.phone_number,
        wx: results.wx,
        email: results.email,
        city: results.city,
        education: education,
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
        financing_situation: financing,
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
  .el-container {
    font-size: 20px;
  }

  .description {
    font-size: 21px;
    text-align: center;
    color: black;
  }

  .center-position {
    text-align: center;
  }

  .line {
    margin: 0 10%;
  }

  .block {
    margin: 30px auto 0;
  }

  .el-col > i {
    font-size: 14px;
    color: #272324;
  }

  .el-col > label {
    margin-bottom: 100px;
    font-size: 14px;
  }

  .info-card {
    width: 62%;
    margin: auto;
  }

  .info-table {
    margin: 40px 20px;
  }

  .top-distance {
    margin-top: 30px;
  }

  .bottom-distance {
    margin-bottom: 40px;
  }
</style>
