<template>
  <div class="wrapper">
    <h3>亲迷路了</h3>
    <p>
      <router-link :to="{name: 'list'}">免费拿奖去 &gt;</router-link>
    </p>
  </div>
</template>
<style lang="less" scoped>
  h3 {
    margin: 10px 0;
    text-align: center;
  }
  p {
    text-align: center;
  }
  a {
    color: #F63B40;
  }
</style>

