<template>
  <el-container>
    <el-main >
      <el-page-header @back="goBack()" content="课程目录"></el-page-header>
      <el-divider/>
      <el-card shadow="never">
        <el-tabs class="top-tab" v-model="activeName" @tab-click="handleClick" addable @edit="handleTabsEdit">
          <el-tab-pane v-for="item in results"
                       :key="item.id"
                       :label="item.content_name"
                       :name="item.content_name">
            <div class="sort">
              <el-divider>
                <el-input
                  size="medium"
                  placeholder="请输入内容"
                  v-model="content_name"
                  show-word-limit>
                  <template slot="prepend">子课程:</template>
                  <el-button slot="append" @click="updateContent">确定修改</el-button>
                </el-input>
              </el-divider>
            </div>
            <div class="main-resource">
              <el-timeline>
                <el-timeline-item placement="top" size="large" type="info">
                  <i class="el-icon-edit"> — 速记 —</i>
                  <el-card class="card">
                    <el-row style="margin-top: 10px;">
                      <div style="text-align: center;">
                        <el-input type="textarea"
                                  v-model="note.word"
                                  placeholder="请输入内容"
                                  :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                      </div>
                    </el-row>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item placement="top" type="info">
                  <i class="el-icon-paperclip"> — 课程资料 —</i>
                  <el-card class="card" >
                    <el-row style="margin-top: 30px;">
                      <el-col :span="8" class="resource-icon">
                        <a :href="resource.url">
                          <i class="el-icon-folder"></i>
                        </a>
                      </el-col>
                      <el-col :span="1">
                        <div style="font-size: 45px;">
                          <el-divider direction="vertical"></el-divider>
                        </div>
                      </el-col>
                      <el-col :span="1"  style="margin: 3% 0 0 5%;">
                        <div >
                          <el-upload
                            class="uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :http-request="uploadImg"
                            :on-success="uploadResourceSuccess"
                            :on-remove="handleRemove">
                            <el-button size="mini" type="primary">点击上传</el-button>
                          </el-upload>
                        </div>
                      </el-col>
                    </el-row>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item placement="top" type="info" size="large">
                  <i class="el-icon-data-board"> — 视频 —</i>
                  <el-card class="card">
                    <el-row style="margin-top: 30px;">
                      <el-col :span="14" :offset="2">
                        <video :src="video.url" width="400px" controls></video>
                      </el-col>
                      <el-col :span="1">
                        <div style="font-size: 70px;">
                          <el-divider direction="vertical"></el-divider>
                        </div>
                      </el-col>
                      <el-col :span="4" class="video-icon">
                        <a :href="video.url">
                          <i class="el-icon-video-play"> {{video.name}}</i>
                        </a>
                        <div style="text-align: center;">
                          <el-upload
                            class="uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :http-request="uploadImg"
                            :on-success="uploadVideoSuccess"
                            :on-remove="handleRemove">
                            <el-button size="mini" type="primary">点击上传</el-button>
                          </el-upload>
                        </div>
                      </el-col>
                      <el-col :span="3" class="resource-icon">

                      </el-col>
                    </el-row>
                  </el-card>
                  <div class="delete_button">
                    <template>
                      <el-popconfirm
                        title="确定删除条目吗？"
                        @onConfirm="deleteContent"
                      >
                        <el-button size="medium"
                                   type="danger"
                                   slot="reference"
                        >删除</el-button>
                      </el-popconfirm>
                    </template>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'EditClassInfoPage',
  data () {
    return {
      semester: '',
      currentClass: {
        name: '',
        introduction: '',
        start_time: '',
        end_time: '',
        current_people_number: '',
        people_number_limit: '',
        state: 0
      }
    }
  },
  created () {
    this.semester = this.$store.getters.getCurrentSemester
    this.currentClass = this.$store.getters.getCurrentClass
    if (this.currentClass) {
      this.currentClass.start_time = new Date(this.currentClass.start_time)
      this.currentClass.end_time = new Date(this.currentClass.end_time)
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    clearText: function () {
      this.currentClass.name = ''
      this.currentClass.people_number_limit = ''
      this.currentClass.timeRange = ''
      this.currentClass.introduction = ''
    },
    saveClassInfo: async function () {
      let that = this
      let url = '/clazz/clazz/' + that.currentClass.id
      that.currentClass.start_time = that.currentClass.start_time.toLocaleDateString().replace(/\//g, '-')
      that.currentClass.end_time = that.currentClass.end_time.toLocaleDateString().replace(/\//g, '-')
      await that.$store.dispatch('changeCurrentClass', that.currentClass)
      that.axios.put(url, {
        name: that.currentClass.name,
        introduction: that.currentClass.introduction,
        start_time: that.currentClass.start_time,
        end_time: that.currentClass.end_time,
        people_number_limit: that.currentClass.people_number_limit
      }).then(function (response) {
        if (response.data.code === '2000') {
          that.$message({
            type: 'success',
            message: '保存成功',
            duration: 2000
          })
        } else {
          that.$message({
            type: 'error',
            message: '服务器繁忙，请稍后重试',
            duration: 2000
          })
        }
      }).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'error',
          message: '服务器繁忙，请稍后重试',
          duration: 2000
        })
      })
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
