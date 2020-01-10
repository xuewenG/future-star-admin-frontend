<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="新建校友活动"></el-page-header>
      <el-divider/>
      <el-card
        class="activity-card"
        shadow="never">
        <div class="description">- 活动信息 -</div>
        <el-image :src="src"></el-image>
        <el-form
          class="activity-table"
          label-width="150px">
          <div class="line">
            <el-divider></el-divider>
          </div>
          <el-row class="top-distance">
            <el-col :span="8" :offset="offset">
              <i class="el-icon-tickets">&nbsp;活动名称：</i>
              <el-input
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.name"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">活动名称:</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="6" :offset="offset">
              <i class="el-icon-watch">&nbsp;报名开始时间：</i>
              <el-date-picker
                v-model="currentActivity.enroll_start_time"
                type="date"
                placeholder="请选择开始时间">
                <template slot="prepend">开始时间：</template>
              </el-date-picker>
            </el-col>
            <el-col :span="6" :offset="2">
              <i class="el-icon-watch">&nbsp;报名结束时间：</i>
              <el-date-picker
                v-model="currentActivity.enroll_end_time"
                type="date"
                placeholder="请选择结束时间">
                <template slot="prepend">结束时间：</template>
              </el-date-picker>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="6" :offset="offset">
              <i class="el-icon-watch">&nbsp;活动时间：</i>
              <el-date-picker
                v-model="currentActivity.start_time"
                type="date"
                placeholder="请选择日期时间">
                <template slot="prepend">活动时间：</template>
              </el-date-picker>
            </el-col>
            <el-col :span="6" :offset="2">
              <i class="el-icon-user">&nbsp;面向人群：</i>
              <el-select v-model="clazz" collapse-tags multiple placeholder="请选择">
                <el-option v-for="item in clazzOptions"
                           :key="item.clazz"
                           :label="item.label"
                           :value="item.clazz">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="6" :offset="offset">
              <i class="el-icon-location-information">&nbsp;活动地点：</i>
              <el-input
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.address"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">活动地点：</template>
              </el-input>
            </el-col>
            <el-col :span="6" :offset="2">
              <i class="el-icon-crop">&nbsp;限制人数：</i>
              <el-input
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.people_number_limit"
                maxlength="3"
                show-word-limit>
                <template slot="prepend">限制人数：</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="6" :offset="offset">
              <i class="el-icon-money">&nbsp;收费情况：</i>
              <el-input
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.price"
                maxlength="4"
                show-word-limit>
                <template slot="prepend">收费情况：</template>
              </el-input>
            </el-col>
            <el-col :span="6" :offset="2">
              <i class="el-icon-s-finance">&nbsp;主办方：</i>
              <el-input
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.organizer"
                maxlength="50"
                show-word-limit>
                <template slot="prepend">主办方：</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <el-col :span="14" :offset="offset">
              <i class="el-icon-fork-spoon">&nbsp;活动日程：</i>
              <el-input
                type="textarea"
                size="medium"
                placeholder="请输入内容"
                v-model="currentActivity.arrangement"
                maxlength="100"
                show-word-limit
                :autosize="{ minRows: 2, maxRows: 4}">
                <template slot="prepend">活动日程：</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="button">
              <el-button type="primary" @click="createActivity()">立即创建</el-button>
              <el-button @click="clearText()">清空</el-button>
              <el-button @click="goBack()">取消</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'CreateActivityPage',
  data () {
    return {
      page_size: 20,
      currentPage: 1,
      offset: 5,
      clazz: null,
      currentActivity: [],
      clazzOptions: [],
      src: '../assets/backgroundImage1.jpg'
    }
  },
  created () {
    if (this.axios) {
      this.findAllClasses()
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    findAllClasses () {
      let that = this
      that.clazzOptions = []
      that.clazz = null
      let params = {
        page_size: that.page_size,
        page: that.currentClassPage
      }
      that.axios.get('/clazz/clazz', { params }).then((response) => {
        if (response.data.code === '2000') {
          let results = response.data.data.results
          for (let i = 0; i < results.length; i++) {
            that.clazzOptions[i] = {
              clazz: results[i]['id'],
              label: results[i]['name']
            }
          }
          that.$forceUpdate()
        }
      })
    },
    createActivity () {
      let that = this
      let params = {
        name: that.currentActivity.name,
        enroll_start_time: that.currentActivity.enroll_start_time.toLocaleDateString().replace(/\//g, '-'),
        enroll_end_time: that.currentActivity.enroll_end_time.toLocaleDateString().replace(/\//g, '-'),
        organizer: that.currentActivity.organizer,
        start_time: that.currentActivity.start_time.toLocaleDateString().replace(/\//g, '-'),
        address: that.currentActivity.address,
        arrangement: that.currentActivity.arrangement,
        price: that.currentActivity.price,
        people_number_limit: that.currentActivity.people_number_limit
      }
      that.axios.post('/activity/activity', params).then((response) => {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '创建活动成功',
            duration: 2000
          })
          let activityResults = response.data.data
          for (let i = 0; i < that.clazz.length; i++) {
            that.axios.post('/activity/clazz', {
              activity_id: activityResults.id,
              clazz_id: that.clazz[i]
            }).then((response) => {
              if (response.data.code === '2000') {
                that.$message({
                  type: 'success',
                  message: '班级关联活动成功',
                  duration: 2000
                })
              } else {
                that.$message({
                  type: 'error',
                  message: '请求出错',
                  duration: 2000
                })
              }
            }).catch(function (error) {
              console.log(error)
              that.$message({
                type: 'error',
                message: '网络繁忙',
                duration: 2000
              })
            })
          }
        } else {
          that.$message({
            type: 'error',
            message: '请求出错',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '网络繁忙',
          duration: 2000
        })
      })
    },
    clearText () {
      this.currentActivity.name = ''
      this.currentActivity.enroll_start_time = ''
      this.currentActivity.enroll_end_time = ''
      this.currentActivity.organizer = ''
      this.currentActivity.start_time = ''
      this.currentActivity.address = ''
      this.currentActivity.arrangement = ''
      this.currentActivity.price = ''
      this.currentActivity.people_number_limit = ''
    }
  }
}
</script>

<style scoped>
  .activity-table {
    margin: 40px 20px;
  }

  .description {
    font-size: 21px;
    text-align: center;
    color: black;
  }

  .img {
    text-align: center;
  }

  .el-col > i {
    font-size: 17px;
    color: #272324;
  }

  .el-col > input {
    font-size: 15px;
  }

  .el-col > label {
    margin-bottom: 100px;
    font-size: 14px;
  }

  .top-distance {
    margin-top: 40px;
  }

  .button {
    margin-top: 30px;
    text-align: center;
  }
</style>
