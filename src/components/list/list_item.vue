<template>
  <div>
    <div class="box session-left" :data-statistics="'text=双11活动页_免费拿_图片_'+product.name" :style="'background-image: url(' + product.list_src + ')'"></div>
    <div class="box session-right">
      <h4><span v-text="product.name"></span>(<span v-text="product.ram">32</span>G)</h4>
      <ul class="tags">
        <li v-for="tag in product.tags">{{tag.name}}</li>
      </ul>
      <p class="grayColor"><span class="price_text">市场价</span><span class="text-del" v-text="'￥'+product.lessPrice"></span></p>
      <p class="grayColor">考拉特供<span class="redColor fontWB">￥0</span></p>
      <!--<p class="grayColor"><span class="space">转存</span><span v-text="product.lessBuy"></span>元起</p>-->
      <a href="javascript:;" class="btn_buy" :data-statistics="'text=双11活动页_免费拿_按钮_'+product.name">免费拿</a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style lang="less" scoped>
@redColor : #F73C8A;
.box{
  width: 50%;
}
.session-left{
  position: absolute;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  img{
    width: 100%;
    height: 100%;
  }
}
.session-right{
  min-height: 160px;
  float: right;
  color: #363636;
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.875em;
  h4{
    font-size: 1.15em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .redColor{
    color: @redColor;
    font-size: 1.2em;
  }
  .tags{
    font-size: 0.75em;
    margin-top: 5px;
    overflow: hidden;
    li{
      float: left;
      padding: 2px 5px;
      color: @redColor;
      border: 1px solid @redColor;
      border-radius: 4px;
      margin: 0 5px 5px 0;
      line-height: 1em;
    }
  }
  .price_text{
    margin-right: 1em;
  }
  .space{
    letter-spacing: 1em;
  }
  .btn_buy{
    width: 90%;
    display: block;
    /*position: absolute;*/
    /*bottom: 10px;*/
    margin-top: 8px;
    background: #F63B40;
    text-align: center;
    color: #fff;
    border-radius: 3px;
    padding: 5px 0;
    font-weight: bold;
    font-size: 1.1em;
  }
}
</style>
