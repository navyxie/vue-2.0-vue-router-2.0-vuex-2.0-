<template>
  <div class="session">
    <ul>
      <li class="list">
        <div class="list-left"><i class="icon1"></i></div>
        <div class="list-right">
          <h4>优质渠道&nbsp;正品保障</h4>
          <p class="grayColor font14">所有手机均由<span class="orangeColor">中国移动终端公司</span>供货及负责寄递，品质保证。</p>
        </div>
      </li>
      <li class="list">
        <div class="list-left"><i class="icon2"></i></div>
        <div class="list-right">
          <h4>全程包邮&nbsp;省心便利</h4>
          <p class="grayColor font14">中国大陆<span class="orangeColor">大部分地区顺丰包邮</span>，保证七个工作日内发货。</p>
        </div>
      </li>
      <li class="list">
        <div class="list-left"><i class="icon3"></i></div>
        <div class="list-right">
          <h4><span class="orangeColor number">0</span>元购物&nbsp;方便划算</h4>
          <p class="grayColor font14"><span class="orangeColor">理财收益提前享</span>，优选商品免费拿，体验消费新模式。</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/styles/detail/detail_common.less';

.list{
  border-bottom: 1px solid #ededed;
  font-size: 0.875em;
  line-height: 1.2em;
  overflow: hidden;
  &:last-child{
   border-bottom: none;
  }
  .list-left{
    float: left;
    width: 20%;
    height: 80px;
    i{
      width: 90%;
      max-width: 70px;
      height: 80px;
      display: block;
      margin: 8px auto 0;
    }
    .icon1{
      background: url("../../assets/images/zheng.png") no-repeat;
      background-size: 100%;
    }
    .icon2{
      background: url("../../assets/images/kuaidi.png") no-repeat;
      background-size: 100%;
    }
    .icon3{
      background: url("../../assets/images/free_buy.png") no-repeat;
      background-size: 100%;
    }
  }
  .list-right{
    float: right;
    width: 78%;
    height: 80px;
    h4{
      margin: 15px 0 5px;
      font-size: 1.1em;
    }
    .number{
      font-size: 1.2em;
    }
  }
}
</style>
