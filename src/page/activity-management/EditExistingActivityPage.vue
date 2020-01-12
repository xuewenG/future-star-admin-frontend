<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改校友活动"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="never">
        <el-row>
          <el-col
            :span="24"
            class="center-position">
            <div class="block">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :http-request="uploadImg"
                :on-success="uploadIconSuccess"
                :on-remove="handleRemove">
                <img width="140px" :src="currentActivity.icon" class="clazz-image" alt="avatar">
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <div class="line">
          <el-divider></el-divider>
        </div>
        <div class="description">- 活动信息 -</div>
        <el-form class="activity-table" label-width="150px">
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
                <template slot="prepend">名称:</template>
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
              <el-select
                v-model="clazz"
                collapse-tags
                :multiple="true"
                placeholder="请选择">
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
                <template slot="prepend">城市：</template>
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
                <template slot="prepend">人数：</template>
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
                <template slot="prepend">金额(¥)：</template>
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
                <template slot="prepend">名称：</template>
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
                :autosize="{ minRows: 4, maxRows: 8}">
                <template slot="prepend">活动日程：</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row class="top-distance">
            <div class="block">
              <el-upload
                align="center"
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :http-request="uploadImg"
                :on-success="uploadImgSuccess"
                :on-remove="handleRemove">
                <img width="400px" :src="currentActivity.image" class="clazz-image" alt="avatar">
              </el-upload>
            </div>
          </el-row>
          <el-row>
            <el-col :span="24" class="button">
              <el-button type="primary" @click="editActivity()">确认修改</el-button>
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
  name: 'EditExistingActivityPage',
  data () {
    return {
      page_size: 20,
      currentPage: 1,
      offset: 5,
      clazz: [],
      oldClazz: [],
      currentActivity: [],
      clazzOptions: []
    }
  },
  created () {
    this.currentActivity = this.$store.getters.getCurrentActivity
    if (this.axios) {
      this.findAllClasses()
      this.findExistClasses()
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    findAllClasses () {
      let that = this
      let params = {
        page: that.currentPage,
        page_size: that.page_size
      }
      that.axios.get('/clazz/clazz', { params }).then((response) => {
        if (response.data.code === '2000') {
          let results = response.data.data.results
          for (let i = 0; i < results.length; i++) {
            that.clazzOptions.push({
              clazz: results[i]['id'],
              label: results[i]['name']
            })
          }
        }
        that.$forceUpdate()
      })
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
            that.oldClazz.push(activityResults[i].id)
          }
        }
        that.$forceUpdate()
      })
    },
    uploadImg (f) {
      let param = new FormData()
      let url = '/file/upload'
      param.append('file', f.file)
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.axios.post(url, param, config)
        .then(response => {
          f.onSuccess(response.data)
        })
        .catch(() => {
          f.onError()
        })
    },
    uploadImgSuccess (response, file, fileList) {
      this.currentActivity.image = response.data.url
      this.$message({
        showClose: true,
        message: '修改活动图片成功',
        type: 'success' })
    },
    uploadIconSuccess (response, file, fileList) {
      this.currentActivity.icon = response.data.url
      this.$message({
        showClose: true,
        message: '修改活动图标成功',
        type: 'success' })
    },
    handleRemove (file, fileList) {
      console.log('文件删除')
    },
    editActivity () {
      let params = {
        name: this.currentActivity.name,
        enroll_start_time: this.currentActivity.enroll_start_time.replace(/\//g, '-'),
        enroll_end_time: this.currentActivity.enroll_end_time.replace(/\//g, '-'),
        organizer: this.currentActivity.organizer,
        start_time: this.currentActivity.start_time.replace(/\//g, '-'),
        address: this.currentActivity.address,
        arrangement: this.currentActivity.arrangement,
        price: this.currentActivity.price,
        people_number_limit: this.currentActivity.people_number_limit
      }
      let url = '/activity/activity/' + this.currentActivity.id
      this.axios.put(url, params).then((response) => {
        if (response.data.code === '2000') {
          this.$message({
            type: 'success',
            message: '修改活动成功',
            duration: 2000
          })
          let url = '/activity/clazz/' + this.currentActivity.id + '/all'
          this.axios.delete(url).then(() => {
            for (let i = 0; i < this.clazz.length; i++) {
              this.axios.post('/activity/clazz', {
                activity_id: this.currentActivity.id,
                clazz_id: this.clazz[i]
              }).then((response) => {
                if (response.data.code === '2000') {
                  this.$message({
                    type: 'success',
                    message: '班级关联活动成功',
                    duration: 2000
                  })
                } else {
                  this.$message({
                    type: 'error',
                    message: '请求出错',
                    duration: 2000
                  })
                }
              }).catch((error) => {
                console.log(error)
                this.$message({
                  type: 'error',
                  message: '网络繁忙，请稍后重试',
                  duration: 2000
                })
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'error',
          message: '网络繁忙',
          duration: 2000
        })
      })
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

  .center-position {
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
