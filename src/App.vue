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
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
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
  top: 235px;
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
  height: 400px;
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
  left: 170px;
  height: 30px;
  top: 7px;
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
  height: 30px;
  top: 7px;
}
.pifu{
  position: absolute;
  right: 100px;
  height: 30px;
  top: 7px;
}
.login{
  position: absolute;
  right: 30px;
  top: 10px;
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
