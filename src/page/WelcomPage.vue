<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="imageAddress in imageAddressArray" :key="imageAddress">
      <el-image :src="imageAddress" fit="fill">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      imageAddressArray: [
      ]
    }
  }
}
</script>

<style scoped>

</style>
