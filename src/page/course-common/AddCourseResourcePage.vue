<template>
  <el-container>
    <el-divider content-position="center">添加课程资料</el-divider>
    <el-header>
      <el-row type="flex" justify="center">
        <el-select
          v-model="value"
          placeholder="请选择要添加资料的课程">
          <el-option
            v-for="item in courseList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-row>
    </el-header>
    <el-main>
      <el-divider content-position="center">资料上传区</el-divider>
      <el-row type="flex" justify="center">
        <el-upload
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取课程资料</el-button>
            <el-button size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'AddCourseResourcePage',
  data () {
    return {
      courseList: [
        {
          value: '1',
          label: '一'
        },
        {
          value: '2',
          label: '二'
        }
      ],
      value: '',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
  .el-button {
    margin-right: 40px;
    margin-left: 40px;
  }

</style>
