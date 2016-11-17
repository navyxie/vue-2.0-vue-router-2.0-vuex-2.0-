<template>
  <div class="wrapper">
    <div class="header">
      <Swipe :options="swiperOption" :picArr="picArr"></Swipe>
    </div>
    <div class="session">
      <p v-text="doubleElevenProductDetail.name_detail"></p>
      <p class="grayColor" v-text="doubleElevenProductDetail.description"></p>
      <p class="grayColor">市场价：<span class="text-del" v-text="'￥'+priceM">5288</span></p>
      <div class="tips">现在下单送<span v-text="priceM*10 + '元'" class="fontWB"></span>体验金5天，两个工作日内到帐！</div>
    </div>
    <div class="session phone_info">
      <div>内存：<span v-text="doubleElevenProductDetail.ram+'G'" class="info_right"></span></div>
      <div class="marginT10 clearfix">颜色：
        <ul class="info_right">
          <li v-for="color in colors" v-on:click="select(color)" v-bind:class="{'selected': color === curColor}">
            {{color}}
          </li>
        </ul>
      </div>
      <div class="marginT10 clearfix">存入期限：
        <ul class="info_right">
          <li v-for="term in terms" v-on:click="selectTerm(term)" v-bind:class="{'selected': term == curTerm}">{{term}}月</li>
        </ul>
      </div>
      <div class="marginT10">存入金额：
        <span class="orangeColor info_right">
          <span class="number" v-text="displayAmount"></span>
        元</span>
      </div>
      <div class="marginT10" v-show="profit>0">另享收益：
        <span class="orangeColor info_right">
          <span class="number" v-text="profit"></span>元
        </span>
      </div>
      <div class="marginT10 clearfix" v-show="profit>0">实质收益：
        <span class="orangeColor info_right">
          <span class="number" v-text="displayRealProfit"></span>元
        </span>
      </div>
      <div class="grayColor fontS12">（手机市场价值+另收益）</div>
    </div>
    <DetailAdvantage></DetailAdvantage>
    <ul v-show="doubleElevenProductDetail.detail_info_src && doubleElevenProductDetail.detail_info_src.length > 0" class="detail_pic">
      <li v-for="detail in doubleElevenProductDetail.detail_info_src"><img :src="detail.name"></li>
    </ul>
    <div class="footer-btn">
      <div class="grayColor relative footer-btn-left">
        <div class="footer-left">
          <div class="floatL">
            数量：
          </div>
          <div class="floatL marginT10">
            <span class="minus size" v-on:click="count('minus')">-</span>
            <span class="number size grayColor" v-text="number"></span>
            <span class="plus size" v-on:click="count('plus')">+</span>
          </div>
        </div>
      </div>
      <router-link :to="{name: 'orderconfirm', params: {color: curColor, term: curTerm, realProfit: realProfit, profit: profit, moreProfit: moreProfit, curOldProfit: curOldProfit, amount: amount, number: number, pic: doubleElevenProductDetail.icon_src}}" class="btn footer-btn-right" data-statistics="text=双11商品详情页_存钱免费拿">
        存钱免费拿
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toNativeObject, numFormatToStr } from '../../utils/util'
import { getProductDetail } from '../../utils/localstorage_api'

// component
import DetailAdvantage from '../../components/detail/detail_advantage'
import Swipe from '../../components/common/swipe'

export default {
  data () {
    return {
      colors: [],
      terms: [],
      curColor: '',
      curTerm: '',
      curOldProfit: 0,
      number: 1,
      amount: 0,
      displayAmount: 0,
      profit: 0,
      realProfit: 0,
      displayRealProfit: 0,
      moreProfit: 0,
      priceM: 0,
      picArr: []
    }
  },
  components: {
    Swipe,
    DetailAdvantage
  },
  computed: {
    swiperOption: {
      loop: true,
      autoplay: 1000,
      autoHeight: true,
      pagination: '.swiper-pagination'
    },
    ...mapGetters({
      doubleElevenProductDetail: 'getDoubleElevenProductDetail'
    })
  },
  mounted () {
    const product = this.$route.params.product ? toNativeObject(this.$route.params.product) : getProductDetail()
    if (!product) {
      return
    }
    this.$store.dispatch('updateDoubleElevenProductDetail', product)
    this.filterAndShowPrices(product)
    this.showDetailPic()
  },
  methods: {
    filterAndShowPrices (product) {
      let colors = []
      let terms = []
      let amount = 0
      let profit = 0
      let priceM = 0
      let moreProfit = 0
      let curOldProfit = 0
      this.doubleElevenProductDetail.prices.forEach(function (price) {
        if (terms.indexOf(parseInt(price.month)) < 0) {
          terms.push(parseInt(price.month))
        }
        if (colors.indexOf(price.color) < 0) {
          colors.push(price.color)
        }
        if (product.prices[0].color === price.color && parseInt(product.prices[0].month) === parseInt(price.month)) {
          amount = price.trans_amount
          profit = Number(price.earning)
          priceM = Number(price.price)
          curOldProfit = Number(price.earning_real)
          moreProfit = Number(price.earning_more)
        }
      })
      this.amount = amount
      this.displayAmount = numFormatToStr(amount)
      this.profit = parseFloat(profit).toFixed(2)
      this.realProfit = parseFloat(profit + priceM)
      this.displayRealProfit = numFormatToStr((this.realProfit).toFixed(2))
      this.moreProfit = moreProfit
      this.priceM = priceM
      this.colors = colors
      this.terms = terms
      this.curOldProfit = curOldProfit
      this.curTerm = this.terms[0]
      this.curColor = this.colors[0]
    },
    showDetailPic () {
      let picArr = []
      this.doubleElevenProductDetail.detail_src.forEach(function (pic) {
        picArr.push(pic.name)
      })
      this.picArr = picArr
    },
    select (color) {
      this.curColor = color
      this.changeAmout()
    },
    selectTerm (term) {
      this.curTerm = term
      this.changeAmout()
    },
    count (method) {
      let buyAmount = this.amount / this.number
      let profit = parseFloat(this.profit) / this.number
      let moreProfit = this.moreProfit / this.number
      let curOldProfit = this.curOldProfit / this.number
      if (method === 'minus') {
        this.number -= 1
        if (this.number <= 1) {
          this.number = 1
        }
      } else {
        this.number += 1
      }
      this.amount = buyAmount * this.number
      this.displayAmount = numFormatToStr(this.amount)
      this.profit = parseFloat(profit * this.number).toFixed(2)
      this.realProfit = parseFloat((profit * this.number) + (this.priceM * this.number))
      this.displayRealProfit = numFormatToStr((this.realProfit).toFixed(2))
      this.moreProfit = this.number * moreProfit
      this.curOldProfit = this.number * curOldProfit
    },
    changeAmout () {
      let curColor = this.curColor
      let curTerm = this.curTerm
      let amount = 0
      let profit = 0
      let priceM = 0
      let moreProfit = 0
      let curOldProfit = 0
      this.doubleElevenProductDetail.prices.forEach(function (price, index) {
        if (curColor === price.color && curTerm === parseInt(price.month)) {
          amount = price.trans_amount
          profit = Number(price.earning)
          priceM = Number(price.price)
          curOldProfit = Number(price.earning_real)
          moreProfit = Number(price.earning_more)
        }
      })
      this.amount = amount
      this.displayAmount = numFormatToStr(amount)
      this.profit = parseFloat(profit).toFixed(2)
      this.realProfit = parseFloat(profit + priceM)
      this.displayRealProfit = numFormatToStr((this.realProfit).toFixed(2))
      this.moreProfit = moreProfit
      this.priceM = priceM
      this.curOldProfit = curOldProfit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../assets/styles/detail/detail_common.less';
@import '../../assets/styles/detail/detail.less';
</style>
