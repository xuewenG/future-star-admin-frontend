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
  name: 'DetailOfSubCoursePage',
  data () {
    return {
      course: '',
      results: [],
      note: {},
      resource: {},
      video: {},
      content_name: '',
      sort: '',
      content_id: '',
      index: 0,
      activeName: '',
      new_index: 0
    }
  },
  created () {
    this.course = this.$store.getters.getCurrentCourse
    if (this.axios) {
      this.getContent()
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
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
    uploadVideoSuccess (response, file, fileList) {
      this.video.url = response.data.url
      this.video.name = '视频'
      this.$message({
        showClose: true,
        message: '上传成功',
        type: 'success' })
      this.$forceUpdate()
    },
    uploadResourceSuccess (response, file, fileList) {
      this.resource.url = response.data.url
      this.resource.name = '资料'
      this.$message({
        showClose: true,
        message: '上传成功',
        type: 'success' })
      this.$forceUpdate()
    },
    handleRemove (file, fileList) {
      console.log('文件删除')
    },
    getContent () {
      let course = this.course
      let params = {
        course_id: course.id,
        page: 1,
        page_size: 100
      }
      let url = '/course/content'
      this.axios.get(url, { params }).then((response) => {
        if (response.data.code === '2000') {
          if (response.data.data.results.length !== 0) {
            this.results = response.data.data.results
            console.log(response.data.data)
            let resource = this.results[this.index].resources
            this.sort = this.results[this.index].sort
            this.content_name = this.results[this.index].content_name
            this.activeName = this.content_name
            this.content_id = this.results[this.index].id
            for (let i = 0; i < resource.length; i++) {
              let resourceType = resource[i].type
              if (resourceType === 0) {
                this.note = resource[i]
                console.log(this.note)
              } else if (resourceType === 1) {
                this.resource = resource[i]
              } else {
                this.video = resource[i]
              }
            }
            if (this.results.length - 1 < 0) {
              this.new_index = 0
            } else {
              this.new_index = this.results[this.results.length - 1].id
            }
          }
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
          message: '网络错误',
          duration: 2000
        })
      })
    },
    updateContent () {
      let params = {
        content_name: this.content_name,
        sort: this.sort,
        id: this.content_id
      }
      let updateUrl = '/course/content/' + this.content_id
      this.axios.put(updateUrl, params).then((response) => {
        if (response.data.code === '2000') {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success' })
          this.results[this.index] = response.data.data
          this.updateResource({
            id: this.video.id,
            name: this.video.name,
            url: this.video.url,
            word: ' ',
            index: 2
          }).then(result => {
            this.video = result
          })
          this.updateResource({
            id: this.resource.id,
            name: this.resource.name,
            url: this.resource.url,
            word: ' ',
            index: 1
          }).then(result => {
            this.resource = result
          })
          this.updateResource({
            id: this.note.id,
            name: this.note.name,
            url: ' ',
            word: this.note.word,
            index: 0
          }).then(result => {
            this.note = result
          })
          this.getContent()
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
          message: '网络错误',
          duration: 2000
        })
      })
    },
    handleTabsEdit (targetName, action) {
      if (action === 'add') {
        this.addContent()
      }
    },
    deleteContent () {
      let deleteUrl = '/course/content/' + this.content_id
      this.axios.delete(deleteUrl).then((response) => {
        if (response.data.code === '2000') {
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success' })
          this.results = []
          this.getContent()
          this.index = 0
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
          message: '网络错误',
          duration: 2000
        })
      })
    },
    addContent () {
      let params = {
        content_name: '新条目' + this.new_index,
        course: this.course.id,
        sort: '类别'
      }
      this.new_index = this.new_index + 1
      this.index = this.results.length
      let updateUrl = '/course/content'
      this.axios.post(updateUrl, params).then((response) => {
        if (response.data.code === '2000') {
          this.getContent()
          this.addResource({
            type: 1,
            name: '资料',
            word: ' ',
            url: ' ',
            content: response.data.data.id
          })
          this.addResource({
            type: 2,
            name: '视频',
            word: ' ',
            url: ' ',
            content: response.data.data.id
          })
          this.addResource({
            type: 0,
            name: '速记',
            word: ' ',
            url: ' ',
            content: response.data.data.id
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
          message: '网络错误',
          duration: 2000
        })
      })
    },
    addResource (data) {
      let params = {
        name: data.name,
        url: data.url,
        word: data.word,
        type: data.type,
        content: data.content
      }
      let updateUrl = '/course/resource'
      this.axios.post(updateUrl, params).then((response) => {
        if (response.data.code === '2000') {
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
          message: '网络错误',
          duration: 2000
        })
      })
    },
    async updateResource (data) {
      let result
      let params = {
        name: data.name,
        url: data.url,
        word: data.word
      }
      let updateUrl = '/course/resource/' + data.id
      await this.axios.put(updateUrl, params).then((response) => {
        if (response.data.code === '2000') {
          result = response.data.data
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
          message: '网络错误',
          duration: 2000
        })
      })
      return result
    },
    handleClick (tab) {
      let resource = this.results[tab.index].resources
      this.sort = this.results[tab.index].sort
      this.content_name = this.results[tab.index].content_name
      this.activeName = this.content_name
      this.content_id = this.results[tab.index].id
      this.index = tab.index
      for (let i = 0; i < resource.length; i++) {
        let resourceType = resource[i].type
        if (resourceType === 0) {
          this.note = resource[i]
        } else if (resourceType === 1) {
          this.resource = resource[i]
        } else {
          this.video = resource[i]
        }
      }
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
  .delete_button {
    margin-top: 50px;
    text-align: center;
  }

  .main-resource {
    margin: 4%;
  }

  .top-tab {
    margin: 3%;
  }

  .card {
    margin-right: 5%;
  }

  .el-icon-edit {
    margin: 10px;
    font-size: 20px;
  }

  .el-icon-paperclip {
    margin: 10px;
    font-size: 20px;
  }

  .el-icon-data-board {
    margin: 10px;
    font-size: 20px;
  }

  .top-bar {
    margin: 0 5%;
  }

  .sort {
    margin: 0 5%;
  }

  .img {
    width: 100px;
    height: 100px;
  }

  .video-icon {
    margin-top: 4%;
    font-size: 35px;
  }

  .resource-icon {
    margin-left: 20%;
    font-size: 50px;
  }

  .el-tabs_item {
    font-size: 300px;
  }

</style>
