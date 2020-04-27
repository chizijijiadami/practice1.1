<template>
  <header>
    <div>
      <router-link class="logo" to="/index">
        <img src="../assets/images/logo.png" />
      </router-link>
      <nav>
        <router-link to="/index" active-class="actived">首页</router-link>
        <router-link to="/products" active-class="actived">产品</router-link>
        <router-link to="/news" active-class="actived">动态</router-link>
        <router-link to="/about" active-class="actived">关于我们</router-link>
        <router-link to="/contact" active-class="actived">联系我们</router-link>
        <router-link to="/recruit" active-class="actived">招贤纳士</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
header
  width 100%
  background-color #000000
  height 72px
div
  display flex
  width 1200px
  margin 0 auto
.logo
  display inline-block
  height 72px
nav a, nav a:visited
  display inline-block
  width 100px
  text-align center
  color white
  font-size 16px
  line-height 72px
a:hover, a.actived
  background-color #444
</style>