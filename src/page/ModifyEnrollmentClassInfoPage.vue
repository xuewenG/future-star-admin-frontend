<template>
  <el-container>
    <el-main>
      <el-page-header @back="goBack()" content="新建班级"></el-page-header>
      <el-divider/>
      <el-card class="activity-card" shadow="always">
        <el-form class="activity-table" label-width="150px">
          <el-form-item class="activity-title" label="班级名称：">
            <el-input
              class="short-text"
              v-model="newClass.className">
            </el-input>
          </el-form-item>
          <el-row>
            <el-col :span="8">
              <el-form-item label="限制人数：">
                <el-input class="short-text"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="班级起止时间：">
            <el-time-picker
              is-range
              v-model="newClass.timeRange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-form-item>
          <el-form-item label="班级介绍：">
            <el-input
              :autosize="{ minRows: 6, maxRows: 30}"
              v-model="newClass.classIntroduction"
              class="long-text"
              type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">修改</el-button>
            <el-button type="plain">清空</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ModifyEnrollmentClassInfoPage',
  data () {
    return {
      newClass: {
        className: '',
        classIntroduction: '',
        timeRange: '',
        limitsOfStudent: ''
      }
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
