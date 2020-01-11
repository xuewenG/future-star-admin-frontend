<template>
  <el-container>
    <el-main>
      <div>
        <el-page-header @back="goBack()" content="资料详情"/>
        <el-divider></el-divider>
      </div>
      <el-card
        class="info-card"
        shadow="never">
        <el-row>
          <el-col :span="24" class="center-position">
            <div class="block">
              <el-avatar :size="130" :src="info.avatar">
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
              <label>{{ info.name }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-male">&nbsp;性别：</i>
              <label>{{ info.gender }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-timer">&nbsp;生日：</i>
              <label>{{ info.birthday }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-mobile-phone">&nbsp;电话：</i>
              <label>{{ info.phone_number }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-document">&nbsp;最高学历：</i>
              <label>{{ info.education }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-school">&nbsp;毕业院校：</i>
              <label >{{ info.school }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-location-information">&nbsp;城市：</i>
              <label>{{ info.city }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-chat-dot-round">&nbsp;微信：</i>
              <label>{{ info.wx }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-edit-outline">&nbsp;邮箱：</i>
              <label >{{ info.email }}</label>
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
              <label>{{ info.previous_company }}</label>
            </el-col>
            <el-col :span="10">
              <i class="el-icon-trophy">&nbsp;前职位：</i>
              <label>{{ info.previous_position }}</label>
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
              <label>{{ info.company_name }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-house">&nbsp;官网：</i>
              <label>{{ info.website }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-discount">&nbsp;公众号：</i>
              <label >{{ info.wx_public }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-alarm-clock">&nbsp;成立时间：</i>
              <label>{{ info.create_time }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-place">&nbsp;所在城市：</i>
              <label>{{ info.company_city }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-data-analysis">&nbsp;总人数：</i>
              <label >{{ info.employee_number }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-trophy">&nbsp;职位：</i>
              <label>{{ info.position }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-news">&nbsp;融资情况：</i>
              <label>{{ info.financing_situation }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-coin">&nbsp;当前估值：</i>
              <label >{{ info.value_of_assessment }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-money">&nbsp;收入规模：</i>
              <label>{{ info.income_scale }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-shopping-cart-full">&nbsp;运营数据：</i>
              <label >{{ info.company_data }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-reading">&nbsp;公司简介：</i>
              <label>{{ info.introduction }}</label>
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
      offset: 2,
      currentAlumni: []
    }
  },
  created () {
    this.currentAlumni = this.$store.getters.getInfoOfAnAlumni
    if (this.axios) {
      this.findAllInformation()
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    findAllInformation () {
      let that = this
      let alumni = that.currentAlumni
      that.info = {
        avatar: alumni.avatar_url,
        id: alumni.id,
        name: alumni.name,
        gender: alumni.gender,
        birthday: alumni.birthday,
        phone_number: alumni.phone_number,
        wx: alumni.wx,
        email: alumni.email,
        city: alumni.city,
        education: alumni.education,
        school: alumni.school,
        previous_company: alumni.previous_company,
        previous_position: alumni.previous_position,
        company_name: alumni.company.name,
        website: alumni.company.website,
        wx_public: alumni.company.wx_public,
        create_time: alumni.company.create_time,
        company_city: alumni.company.city,
        employee_number: alumni.company.number_employee,
        position: alumni.company.position,
        introduction: alumni.company.introduction,
        company_data: alumni.company.company_data,
        income_scale: alumni.company.income_scale,
        financing_situation: alumni.company.financing_situation,
        value_of_assessment: alumni.company.value_of_assessment
      }
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
