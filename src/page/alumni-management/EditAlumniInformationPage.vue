<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="修改校友信息"></el-page-header>
      <el-divider/>
      <el-card class="info-card" shadow="always">
        <el-row>
          <el-col :span="24" class="avatar-container">
            <div class="block">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :http-request="uploadImg"
                :on-success="uploadImgSuccess"
                :on-remove="handleRemove">
                <img v-if="student.avatar_url" :src="student.avatar_url" class="avatar" alt="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon">添加校友头像</i>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-form class="info-table" label-width="130px">
          <div class="line">
            <el-divider></el-divider>
          </div>
          <div class="description">- 个人信息 -</div>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-user">&nbsp;姓名：</i>
              <el-input
                :disabled=signal
                size=size
                placeholder="请输入内容"
                v-model="student.name"
                maxlength="10"
                show-word-limit>
                <template slot="prepend">名字:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-male">&nbsp;性别：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.gender"
                maxlength="1"
                show-word-limit>
                <template slot="prepend">性别:</template>
                <el-select v-model="student.gender" slot="append" placeholder="请选择">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-timer">&nbsp;生日：</i>
              <el-input
                :disabled=true
                suffix-icon="el-icon-date"
                size="medium"
                placeholder="请输入内容"
                v-model="student.birthday"
                maxlength="10"
                show-word-limit>
                <template slot="prepend">日期:</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-mobile-phone">&nbsp;电话：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.phone_number"
                maxlength="11"
                show-word-limit>
                <template slot="prepend">电话号码:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-document">&nbsp;最高学历：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.education"
                maxlength="10"
                show-word-limit>
                <el-select v-model="student.education" slot="append" placeholder="请选择">
                  <el-option label="博士" value="博士"></el-option>
                  <el-option label="研究生" value="研究生"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="专科" value="专科"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
                <template slot="prepend">学历:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-school">&nbsp;毕业院校：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.school"
                maxlength="10"
                show-word-limit>
                <template slot="prepend">学校名:</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-location-information">&nbsp;城市：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.city"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">城市名:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-chat-dot-round">&nbsp;微信：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.wx"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">微信号:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-edit-outline">&nbsp;邮箱：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.email"
                maxlength="30"
                show-word-limit>
                <template slot="prepend">邮箱号:</template>
              </el-input>
            </el-col>
          </el-row>
          <div class="line">
            <el-divider></el-divider>
          </div>
          <el-row style="margin-bottom: 40px;">
            <el-col :span="24">
              <div class="description">- 创业前所在公司 -</div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="8" :offset="3">
              <i class="el-icon-office-building">&nbsp;公司名称：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.previous_company"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">公司名:</template>
              </el-input>
            </el-col>
            <el-col :span="8" :offset="3">
              <i class="el-icon-trophy">&nbsp;前职位：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.previous_position"
                maxlength="20"
                show-word-limit>
                <el-select v-model="student.previous_position" slot="append" placeholder="可选择">
                  <el-option label="创始人" value="创始人"></el-option>
                  <el-option label="联合创始人" value="联合创始人"></el-option>
                  <el-option label="董事长" value="董事长"></el-option>
                  <el-option label="首席执行官" value="首席执行官"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
                <template slot="prepend">职位:</template>
              </el-input>
            </el-col>
          </el-row>
          <div class="line">
            <el-divider></el-divider>
          </div>
          <el-row style="margin-bottom: 40px;">
            <el-col :span="24">
              <div class="description">- 当前公司 -</div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-star-off">&nbsp;名称：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.company_name"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">公司名:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-house">&nbsp;官网：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.website"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">Http://</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-discount">&nbsp;公众号：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.wx_public"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">公众号名称:</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-alarm-clock">&nbsp;成立时间：</i>
              <el-input
                :disabled=true
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.create_time"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">日期:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-place">&nbsp;所在城市：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.company_city"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">城市:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-data-analysis">&nbsp;总人数：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.employee_number"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">人数(人):</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="width" :offset="offset">
              <i class="el-icon-trophy">&nbsp;职位：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.position"
                maxlength="20"
                show-word-limit>
                <el-select v-model="student.position" slot="append" placeholder="可选择">
                  <el-option label="创始人" value="创始人"></el-option>
                  <el-option label="联合创始人" value="联合创始人"></el-option>
                  <el-option label="董事长" value="董事长"></el-option>
                  <el-option label="首席执行官" value="首席执行官"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
                <template slot="prepend">职称:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-news">&nbsp;融资情况：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.financing_situation"
                maxlength="20"
                show-word-limit>
                <el-select v-model="student.financing_situation" slot="append" placeholder="可选择">
                  <el-option label="种子轮" value="种子轮"></el-option>
                  <el-option label="天使轮" value="天使轮"></el-option>
                  <el-option label="A轮" value="A轮"></el-option>
                  <el-option label="B轮" value="B轮"></el-option>
                  <el-option label="C轮" value="C轮"></el-option>
                  <el-option label="D轮" value="D轮"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
                <template slot="prepend">轮次:</template>
              </el-input>
            </el-col>
            <el-col :span="width" :offset="offset">
              <i class="el-icon-coin">&nbsp;当前估值：</i>
              <el-input
                :disabled=signal
                type="text"
                size="medium"
                placeholder="请输入内容"
                v-model="student.value_of_assessment"
                maxlength="20"
                show-word-limit>
                <template slot="prepend">估值(¥):</template>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-money">&nbsp;收入规模：</i>
              <el-input
                :disabled=signal
                type="textarea"
                placeholder="请输入内容"
                :autosize="{ minRows: 2, maxRows: 4}"
                v-model="student.income_scale"
                maxlength="100"
                show-word-limit>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-shopping-cart-full">&nbsp;运营数据：</i>
              <el-input
                :disabled=signal
                type="textarea"
                placeholder="请输入内容"
                :autosize="{ minRows: 2, maxRows: 4}"
                v-model="student.company_data"
                maxlength="100"
                show-word-limit>
              </el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 30px;">
            <el-col :span="21" :offset="offset">
              <i class="el-icon-reading">&nbsp;公司简介：</i>
              <el-input
                :disabled=signal
                type="textarea"
                placeholder="请输入内容"
                :autosize="{ minRows: 2, maxRows: 8}"
                v-model="student.introduction"
                maxlength="400"
                show-word-limit>
              </el-input>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :span="24" class="button">
            <el-button type="primary" @click="confirmChange()">确认修改</el-button>
            <el-button>取消</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EditAlumniInformationPage',
  data () {
    return {
      info: {},
      student: {},
      width: 5,
      offset: 2,
      signal: false,
      change_state: 0,
      currentAlumni: []
    }
  },
  created () {
    let that = this
    that.currentAlumni = that.$store.getters.getInfoOfAnAlumni
    that.findAllInformation()
  },
  watch: {
    change_state () {
      this.findAllInformation()
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('changeInfoOfAnAlumni', this.currentAlumni)
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
      this.student.avatar_url = response.data.url
      this.$message({
        showClose: true,
        message: '修改头像成功',
        type: 'success' })
    },
    handleRemove (file, fileList) {
      console.log('文件删除')
    },
    findAllInformation () {
      let that = this
      let results = that.$store.getters.getInfoOfAnAlumni
      if (results) {
        that.student = {
          id: results.id,
          avatar_url: results.avatar_url,
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
    },
    confirmChange () {
      let that = this
      let alumni = that.student
      let mapping = {
        '男': 0,
        '女': 1
      }
      let alumniGender = mapping[alumni.gender]
      let params = {
        avatar_url: alumni.avatar_url,
        name: alumni.name,
        company: {
          name: alumni.company_name,
          website: alumni.website,
          wx_public: alumni.wx_public,
          create_time: alumni.create_time,
          company_city: alumni.city,
          number_employee: alumni.employee_number,
          position: alumni.position,
          introduction: alumni.introduction,
          company_data: alumni.company_data,
          income_scale: alumni.income_scale,
          financing_situation: alumni.financing_situation,
          value_of_assessment: alumni.value_of_assessment
        },
        gender: alumniGender,
        birthday: alumni.birthday,
        phone_number: alumni.phone_number,
        wx: alumni.wx,
        email: alumni.email,
        city: alumni.city,
        education: alumni.education,
        school: alumni.school,
        previous_company: alumni.previous_company,
        previous_position: alumni.previous_position
      }
      let url = '/student/student/' + alumni.id
      that.axios.put(url, params).then((response) => {
        if (response.data.code === '2000') {
          that.$store.dispatch('changeInfoOfAnAlumni', that.student)
          that.change_state = 1
          that.$message({
            type: 'success',
            message: '修改成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '网络繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch((error) => {
        console.log(error)
        that.$message({
          type: 'error',
          message: '网络繁忙，请稍后重试',
          duration: 2000
        })
      })
    }
  }
}
</script>

<style scoped>
  .button {
    margin-top: 30px;
    text-align: center;
  }

  .el-container {
    font-size: 20px;
  }

  .description {
    font-size: 21px;
    text-align: center;
    color: black;
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

  .avatar-container {
    text-align: center;
  }

  .avatar-uploader .el-upload {
    position: relative;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    width: 178px;
    height: 178px;
    font-size: 28px;
    line-height: 178px;
    text-align: center;
    color: #8c939d;
  }

  .avatar {
    width: 178px;
    height: 178px;
    border-radius: 89px;
  }

  .block {
    margin: 30px auto 0;
  }
</style>
