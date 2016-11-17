<template>
  <div class="wrapper">
    <div v-for="product in productList(doubleElevenProductList)" class="session">
      <router-link :to="{name: 'detail', params: {id: product.id, product}}">
        <ListItem :product="product" class="relative clearfix"></ListItem>
      </router-link>
    </div>
    <p class="statement">本活动及提供奖品与苹果公司无关</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getProductList } from '../../utils/localstorage_api'
import { productList } from '../../utils/filters'

// component
import ListItem from '../../components/list/list_item'

export default {
  data () {
    return {
    }
  },
  computed: mapGetters({
    doubleElevenProductList: 'getDoubleElevenProductList'
  }),
  components: {
    ListItem
  },
  mounted () {
    this.$store.dispatch('updateDoubleElevenProductList', getProductList())
    this.$store.dispatch('fetchDoubleElevenProductList')
  },
  watch: {
  },
  methods: {
    productList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/styles/list/list.less';
  .statement{
    text-align: center;
    font-size: 0.75em;
    padding-bottom: 5px;
    color: #ccc;
  }
</style>
