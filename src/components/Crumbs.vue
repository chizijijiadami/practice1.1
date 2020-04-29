<template>
  <div class="content-center crumbs">
    <!-- 下面的三目运算主要针对最后一个路由，它不需要被点击，后面也不需要 > -->
    <a
      v-for="(item,index) in getCrumbs"
      :class="index!=getCrumbs.length-1?'':'crumb-end'"
      :key="index"
      :href="index!=getCrumbs.length-1?item.path:'javascript:void(0)'"
    >
    <!-- item.meta.title中的meta就是我们在路由文件router/index.js中设置的 -->
      {{item.meta.title}}
      <span>{{index!=getCrumbs.length-1?" > ":""}}</span>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    getCrumbs() {
      return this.$store.state.crumbsList;
    }
  }
};
</script>

<style lang='stylus' scoped>
.crumbs
  line-height 30px
  font-size 14px
.crumbs a
  color #2973b7
.crumbs span
  color #333
.crumbs .crumb-end
  color #333
  cursor default
</style>