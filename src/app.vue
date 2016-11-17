<template>
  <div class="main">
    <div class="application-view">
      <transition name="fade">
          <router-view></router-view>
      </transition>
    </div>

    <div class="spinner" role="spinner" v-show="loading">
      <div class="spinner-icon"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    loading: 'getLoading'
  }),
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
  @import "assets/styles/global.less";

  @orangeColor: #EB9741;
  .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 640px;
    overflow-x: hidden;
    .orangeColor{
      color: @orangeColor;
    }
    .grayColor{
      color: #838383;
    }
    .marginT10{
      margin-top: 10px;
    }
    .marginA{
      margin: 0 auto;
    }
    .font14{
      font-size: 0.875em;
    }
  }
  .productBox-hd{
    padding: 3% 5%;
    border-bottom: 1px solid #ededed;
    line-height: 1.5em;
  }
  .footer-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    box-shadow: 0px -4px 8px rgba(79,79,79,.2);
    .footer-btn-left,.footer-btn-right{
      width: 50%;
      height: 100%;
      float: left;
    }
    .footer-btn-right{
      display: block;
    }
    .btn{
      background: #F63B40;
      color: #fff;
      font-size: 1.3em;
    }
  }
</style>
