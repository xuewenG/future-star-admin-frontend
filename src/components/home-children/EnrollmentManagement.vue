git <template>
  <el-container>
    <el-header>
      <h2>{{ semester }}</h2>
    </el-header>
    <el-main class="main-in-enrollment">
      <el-tabs v-model="activeName">
        <el-tab-pane label="未开放" name="first">
          <unopen-classes></unopen-classes>
        </el-tab-pane>
        <el-tab-pane label="招生中" name="second">
          <enrolling-classes></enrolling-classes>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import UnopenClasses from '../class/ClassesUnopen'
import EnrollingClasses from '../class/ClassesEnrolling'
export default {
  name: 'EnrollmentManagementPage',
  components: {
    UnopenClasses,
    EnrollingClasses
  },
  data () {
    return {
      activeName: 'first',
      semester: '第九期未来之星创新院'
    }
  }
}
</script>

<style scoped>
  .main-in-enrollment {
    padding: 0;
    margin: 0;
  }

  .el-header {
    padding: 0;
  }
</style>
