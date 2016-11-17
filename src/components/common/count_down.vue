<template>
  <div v-if="html" class="countDown-leftTime"  :style="this.option && this.option.style ? this.option.style : ''">
    <div v-html="html"></div>
  </div>
</template>
<script>
import { countDownSpace } from '../../utils/filters'
import { mergeDeep } from '../../utils/util'
export default {
  data () {
    return {
      setIntervalFlag: null,
      html: '',
      timeSpace: 0,
      config: {}
    }
  },
  props: {
    time: {
      type: Number,
      required: true
    },
    option: {
      type: Object,
      required: false
    }
  },
  watch: {
  },
  mounted () {
    this.initConfig()
    this.loopCountDown()
  },
  methods: {
    // 初始化默认显示的html内容
    // 初始化倒计时的相关配置
    initConfig () {
      let defaultConfig = this.getDefaultConfig()
      this.config = mergeDeep(defaultConfig, this.option || {})
    },
    // 获取默认的配置,这里就是外部调用组件可以配置的参数
    getDefaultConfig () {
      return {
        // 倒计时前缀文本
        prefixText: {
          text: '',
          tag: 'span',
          style: ''
        },
        // 倒计时后缀文本
        suffixText: {
          text: '',
          tag: 'span',
          style: ''
        },
        // 关于天的配置
        day: {
          show: true, // 书否显示天数
          unit: '天', // 定义显示天数的单位,比如天,day等任意字符
          partition: '', // unit后面是否需要分隔符,比如,号,默认是空
          tag: 'span',
          style: '' // 天数的样式
        },
        // 关于小时的配置
        hour: {
          show: true,
          unit: '时',
          partition: '',
          tag: 'span',
          style: ''
        },
        // 关于分钟的配置
        minute: {
          show: true,
          unit: '分',
          partition: '',
          tag: 'span',
          style: ''
        },
        // 关于秒的配置
        second: {
          show: true,
          unit: '秒',
          partition: '',
          tag: 'span',
          style: ''
        },
        // 倒计时时间距离当前时间是往前还是往后,left代表往前,right代表往后,默认是left
        direction: 'left',
        // 倒计时全局样式
        style: ''
      }
    },
    // 获取倒计时最新的时间戳
    getTimeSpace () {
      let timeSpace = this.time - Date.now()
      if (this.config.direction === 'right') {
        timeSpace = Date.now() - timeSpace
      }
      return timeSpace
    },
    // 给倒计时文本添加标签
    wrapTag (tagConfig, text) {
      let html = '<' + tagConfig.tag + ' style="' + tagConfig.style + '">' + text + '</' + tagConfig.tag + '>' + (tagConfig.unit ? tagConfig.unit : '') + (tagConfig.partition ? tagConfig.partition : '')
      return html
    },
    // 渲染倒计时html内容
    renderHtml () {
      let timeSpace = this.getTimeSpace()
      let timeData = countDownSpace(timeSpace)
      let html = ''
      let extendConfig = this.config
      // 拼接倒计时前缀文本
      if (extendConfig.prefixText.text) {
        html += this.wrapTag(extendConfig.prefixText, extendConfig.prefixText.text)
      }
      // 拼接倒计时天数文本
      if (extendConfig.day.show && timeData.day) {
        html += this.wrapTag(extendConfig.day, timeData.day)
      }
      // 拼接倒计时小时文本
      if (extendConfig.hour.show && (timeData.hour || timeData.day)) {
        html += this.wrapTag(extendConfig.hour, timeData.hour)
      }
      // 拼接倒计时分钟文本
      if (extendConfig.minute.show && (timeData.minute || timeData.hour || timeData.day)) {
        html += this.wrapTag(extendConfig.minute, timeData.minute)
      }
      // 拼接倒计时秒文本
      if (extendConfig.second.show) {
        html += this.wrapTag(extendConfig.second, timeData.second)
      }
      // 拼接倒计时后缀文本
      if (extendConfig.suffixText.text) {
        html += this.wrapTag(extendConfig.suffixText, extendConfig.suffixText.text)
      }
      this.html = html
      return html
    },
    // 开启倒计时
    loopCountDown () {
      let that = this
      that.setIntervalFlag = window.setInterval(function () {
        that.renderHtml()
      }, 1000)
    }
  },
  beforeCreate () {
    // 页面开始创建清除倒计时计时器
    this.setIntervalFlag && window.clearInterval(this.setIntervalFlag)
  },
  beforeDestroy () {
    // 离开页面清除定时器
    this.setIntervalFlag && window.clearInterval(this.setIntervalFlag)
  }
}
</script>
<style lang="less" scoped>
.countDown-leftTime {
  background: #8511cc;
  color: #fff;
  text-align: center;
  padding: 2px 0;
}
</style>