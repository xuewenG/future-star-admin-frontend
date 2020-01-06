<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="imageAddress in imageAddressArray" :key="imageAddress.id">
      <el-image :src="imageAddress.address" fit="fill">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      imageAddressArray: [
        {
          id: '1',
          address: require('../../assets/backgroundImage1.jpg')
        },
        {
          id: '2',
          address: require('../../assets/backgroundImage2.jpg')
        },
        {
          id: '3',
          address: require('../../assets/backgroundImage3.jpg')
        },
        {
          id: '4',
          address: require('../../assets/backgroundImage4.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
