<template>
  <el-container>
    <el-main>
      <div>
        <el-page-header @back="goBack()" content="活动详情"/>
        <el-divider></el-divider>
      </div>
      <el-card
        class="info-card"
        shadow="never">
        <el-row>
          <el-col
            :span="24"
            class="center-position">
            <div class="block">
              <el-avatar
                :size="130"
                :src="currentActivity.image">
              </el-avatar>
            </div>
          </el-col>
        </el-row>
        <el-form class="info-table" label-width="130px">
          <div class="line">
            <el-divider></el-divider>
          </div>
          <div class="description">- 活动信息 -</div>
          <el-row class="top-distance">
            <el-col :span="width" :offset="2">
              <i class="el-icon-user">&nbsp;活动名称：</i>
              <label>{{ currentActivity.name }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-male">&nbsp;报名开始时间：</i>
              <label>{{ currentActivity.enroll_start_time }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-timer">&nbsp;报名结束时间：</i>
              <label>{{ currentActivity.enroll_end_time }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-mobile-phone">&nbsp;活动时间：</i>
              <label>{{ currentActivity.start_time }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-document">&nbsp;面向人群：</i>
              <label v-for="item in clazzOptions"
                     :key="item.clazz"
                     :label="item.label"
                     :value="item.clazz">
              </label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-school">&nbsp;活动地点：</i>
              <label >{{ currentActivity.address }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-location-information">&nbsp;限制人数：</i>
              <label>{{ currentActivity.people_number_limit }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-chat-dot-round">&nbsp;收费情况：</i>
              <label>{{ currentActivity.price }}</label>
            </el-col>
            <el-col :span="width">
              <i class="el-icon-edit-outline">&nbsp;主办方：</i>
              <label >{{ currentActivity.organizer }}</label>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col
              :span="21"
              :offset="offset">
              <i class="el-icon-reading">&nbsp;活动日程：</i>
              <label>{{ currentActivity.arrangement }}</label>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col
            :span="24"
            class="center-position">
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="editDetails()">
              编辑
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ShowActivityInformationPage',
  data () {
    return {
      currentActivity: [],
      width: 7,
      offset: 2,
      page_size: 20,
      currentPage: 1,
      clazz: [],
      clazzOptions: []
    }
  },
  created () {
    console.log(this.clazz)
    this.currentActivity = this.$store.getters.getCurrentActivity
    if (this.axios) {
      // this.findAllClasses()
      this.findExistClasses()
    }
  },
  methods: {
    goBack  () {
      this.$router.go(-1)
    },
    editDetails () {
      this.$router.push('/edit-activity')
    },
    findExistClasses () {
      let that = this
      let params = {
        page: that.currentPage,
        page_size: that.page_size,
        activity_id: that.currentActivity.id
      }
      that.axios.get('/activity/clazz', { params }).then((response) => {
        if (response.data.code === '2000') {
          let activityResults = response.data.data.results
          for (let i = 0; i < activityResults.length; i++) {
            that.clazz.push(activityResults[i].id)
          }
        }
        that.$forceUpdate()
      })
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
