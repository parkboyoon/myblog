<template>
  <div id="app">
    <header class="main-head">
      <img class="logo" src="./assets/logo.png" alt="">
      <img class="home" src="./assets/home.png" alt="">
      <input class="search" type="text" placeholder="搜索">
      <img class="help" src="./assets/help.png" alt="">
      <img class="pifu" src="./assets/pifu.png" alt="">
      <span class="login">登录</span>
    </header>
    <div class="topbg">
      <div class="person">
        <img src="./assets/person.jpg" alt="">
      </div>
      <p class="name">yuri</p>
      <p class="zuoyouming">诗和远方的田园</p>
      <div class="btngroup">
        <el-button type="primary" round icon="el-icon-info">关于我</el-button>
        <el-button type="success" round icon="el-icon-star-on">伐木累</el-button>
        <el-button type="warning" round icon="el-icon-warning">吐槽吧</el-button>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item  index="2">程序猿笔记</el-menu-item >
        <el-menu-item index="3">音悦台</el-menu-item>
        <el-menu-item index="4">影视工厂</el-menu-item>
        <el-menu-item index="5">图书馆</el-menu-item>
        <el-menu-item index="6">随笔</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <footer class="main_foot">
      <p>Copyright © 2018 yuriblog.com All Rights Reserved. 备案号:鄂ICP备15020375号-1</p>
      <p>程序:yuri博客v1.0 前端框架:Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f8f9;
  position: relative;
}
.main_foot{
  width: 100%;
  height: 80px;
  background: #909399;
  margin-top: 30px;
  padding-top: 20px;
}
.main_foot p{
  line-height: 30px;
  color: #fff;
  font-size: 14px;
}
.content{
  width: 80%;
  margin: 436px 10% 0;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(73,80,96,0.10)
}
.el-menu-demo{
  position: absolute !important;
  bottom: 0;
  width: 80%;
  margin: 0 10% !important;
}
.btngroup{
  position: absolute;
  top: 280px;
  width: 100%;
}
.person img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: calc(50% - 50px);
}
.name{
  position: absolute;
  top: 210px;
  text-align: center;
  width: 100%;
  font-size: 20px;
  color: #fff;
}
.zuoyouming{
  position: absolute;
  top: 240px;
  text-align: center;
  width: 100%;
  font-size: 20px;
  color: #fff;
}
.topbg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 480px;
  background: url(./assets/timg.jpg) no-repeat;
  background-size: cover;
}
.main-head{
  position: relative;
  height: 44px;
  width: 100%;
  min-width: 1200px;
  z-index: 2;
}
.logo{
  position: absolute;
  left: 15px;
  height: 36px;
  top: 4px;
}
.home{
  position: absolute;
  left: 190px;
  height: 24px;
  top: 10px;
  cursor: pointer;
}
.search{
  position: absolute;
  width: 200px;
  height: 30px;
  top: 7px;
  left: calc(50% - 100px);
  border: none;
  background: rgba(255,255,255,0.3);
  text-align: center;
}
.help{
  position: absolute;
  right: 150px;
  height: 24px;
  top: 10px;
  cursor: pointer;
}
.pifu{
  position: absolute;
  right: 100px;
  height: 30px;
  top: 7px;
  cursor: pointer;
}
.login{
  position: absolute;
  right: 35px;
  top: 15px;
  color: #fff;
  cursor: pointer;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
