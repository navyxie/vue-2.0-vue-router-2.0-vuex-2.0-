<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="pic in picArr">
      <img :src="pic" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
// component
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    swiperOption: {
      type: Object,
      required: false
    },
    picArr: {
      type: Array,
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
img{
  width: 100%;
}
</style>