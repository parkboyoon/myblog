<template>
  <div id="app">
    <header :style="styleobj" class="main-head">
      <img class="logo" src="./assets/logo.png" alt="">
      <img @click="goindex" class="home" src="./assets/home.png" alt="">
      <input @click="doing" class="search" type="text" placeholder="搜索">
      <img @click="doing" class="help" src="./assets/help.png" alt="">
      <img @click="doing" class="pifu" src="./assets/pifu.png" alt="">
      <span v-if="!islogin" @click="gologin" class="login">登录</span>
      <el-button v-if="islogin" class="haslogin" v-popover:popover4><img src="./assets/person.jpg" alt=""></el-button>
      <el-popover v-if="islogin" ref="popover4" placement="bottom" width="100" trigger="click">
        <ul class="user-tab">
          <li @click="doing">个人信息</li>
          <li @click="goadmin">管理员</li>
          <li @click="loginout">退出登录</li>
        </ul>
      </el-popover>
    </header>
    <div :style="styleobj" class="geaderbg"></div>
    <div class="topbg">
      <div class="person">
        <img src="./assets/person.jpg" alt="">
      </div>
      <p class="name">yuri</p>
      <p class="zuoyouming">诗和远方的田园</p>
      <div class="btngroup">
        <el-button @click="goabout" type="primary" round icon="el-icon-info">关于我</el-button>
        <el-button @click="doing" type="success" round icon="el-icon-star-on">伐木累</el-button>
        <el-button @click="doing" type="warning" round icon="el-icon-warning">吐槽吧</el-button>
      </div>
      <el-menu :default-active="activeIndex" v-if="!isadmin" class="el-menu-demo" mode="horizontal">
        <el-menu-item @click="goindex" index="1">首页</el-menu-item>
        <el-menu-item @click="goprogrammer" index="2">程序猿笔记</el-menu-item>
        <el-menu-item @click="gomusic" index="3">细说NBA</el-menu-item>
        <el-menu-item @click="gofilm" index="4">影视工厂</el-menu-item>
        <el-menu-item @click="golibrary" index="5">图书馆</el-menu-item>
        <el-menu-item @click="godiary" index="6">随笔</el-menu-item>
      </el-menu>
      <el-menu :default-active="activeIndex" v-if="isadmin" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">写博客</el-menu-item>
        <el-menu-item index="2">栏目授权</el-menu-item>
        <el-menu-item index="3">加入伐木累</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <footer class="main_foot">
      <p>Copyright © 2018 yuriblog.com All Rights Reserved. 备案号:湘ICP备17007017号</p>
      <p>程序:yuri博客v1.0 前端框架:Vue.js</p>
    </footer>
    <el-dialog :title="loginTitle" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-input v-if="!isRegister" placeholder="请输入用户名" v-model="username" clearable></el-input>
        <el-input v-if="!isRegister" class="mgt10" placeholder="请输入密码" type="password" v-model="password"
                  clearable></el-input>
        <el-input v-if="isRegister" placeholder="请输入用户名" v-model="registerName" clearable></el-input>
        <el-input v-if="isRegister" class="mgt10" placeholder="请输入密码" type="password" v-model="registerPass"
                  clearable></el-input>
        <el-input v-if="isRegister" class="mgt10" placeholder="确认密码" type="password" v-model="registerPass2"
                  clearable></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button @click="goRegister">注 册</el-button>
         <el-button type="primary" @click="loginphp">登 录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import $ from 'jquery'
  import nicescroll from 'jquery.nicescroll'
  import api from './api'
  export default {
    name: 'App',
    data () {
      return {
        isadmin: false,
        islogin: false,
        Jurisdiction: false,
        loginTitle: '登录',
        registerName: '',
        registerPass: '',
        registerPass2: '',
        isRegister: false,
        username: '',
        password: '',
        dialogVisible: false,
        activeIndex: '1',
        styleobj: {
          background: ''
        }
      }
    },
    created () {
        this.$store.commit('changelogin')
        this.islogin = this.$store.state.login.islogin
        this.isjuri()
        this.initroute()
    },
    watch: {
        '$route': 'initroute',
        '$route': 'gotop',
    },
    methods: {
      isjuri() {
        let userId = this.$store.state.login.userId
        if (userId == 'yuriwang') {
          this.Jurisdiction = true
        } else {
          this.Jurisdiction = false
        }
      },
      gotop() {
        if (this.$route.path.match('detail') != null) {
          $("#app").getNiceScroll(0).doScrollTop(0, 10);
        }
      },
      initroute() {
        if (this.$route.path.match('admin') == null) {
          this.isadmin = false
        } else {
          this.isadmin = true
        }
      },
      goadmin() {
        if (this.Jurisdiction) {
          this.activeIndex = '1'
          this.$router.push('/admin/writer')
          this.isadmin = true
        } else {
          this.$prompt('你还没有管理员权限，如需权限，请填写申请理由', '管理员权限申请', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
          }).then(({ value }) => {
            if (value.length == 0) {
              this.$message({
                type: 'error',
                message: '理由不能为空'
              });
            } else {
              this.$message({
                type: 'success',
                message: '申请已提交'
              });
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }
      },
      loginout() {
        localStorage.removeItem('userId')
        this.$store.commit('changelogin')
        this.islogin = this.$store.state.login.islogin
      },
      goRegister() {
          if (!this.isRegister) {
            this.isRegister = true
            this.loginTitle = '注册'
          } else {
            if (this.registerName == '' || this.registerPass == '' || this.registerPass2 == '') {
              this.$message.error("请完善注册信息");
            } else if (this.registerName.length < 8 || this.registerName.length > 16 || this.registerPass<8 || this.registerPass>16) {
              this.$message.error("账号密码均为8-16位数字或字母");
            } else if (this.registerPass != this.registerPass2) {
              this.$message.error("两次输入密码不一致");
            } else {
              this.$http.get(api.register,{
                params: {
                  username: this.registerName, password: this.registerPass
                }
              }).then(res => {
                let data = res.data
                if (data.code == 0) {
                  this.$message.error("改用户名已被注册");
                } else if (data.code == 1) {
                  this.$message.success("注册成功");
                  this.isRegister = false
                  this.loginTitle = '登录'
                } else {
                  this.$message.error("未知错误，请稍后再试");
                }
              })
            }
          }
      },
      loginphp() {
        if (this.isRegister) {
          this.isRegister = false
          this.loginTitle = '登录'
        } else if (this.username.length < 8 || this.username.length > 16 || this.password<8 || this.password>16) {
          this.$message.error("账号密码均为8-16位数字或字母");
        } else {
          this.$http.get(api.login, {
            params: {
              username: this.username, password: this.password
            }
          }).then(res => {
            let data = res.data
            if (data.code == 0) {
              this.$message.error("账号密码不能为空");
            } else if (data.code == 1) {
              this.$message.error("用户名或密码错误");
            } else if (data.code == 2) {
              this.$message.error("未知错误");
            } else if (data.code == 3) {
              this.$message.success("登录成功");
              this.dialogVisible = false
              localStorage.setItem('userId',this.username)
              this.islogin = true
              this.$store.commit('changelogin')//保存当前状态
              this.isjuri()
            }
          })
        }
      },
      gologin() {
        this.dialogVisible = true
      },
      doing() {
        this.$message.error('别急哟，正在开发中呢！');
      },
      goindex() {
        this.$router.push('/')
      },
      goprogrammer() {
        this.$router.push('/programmer')
      },
      gomusic() {
        this.$router.push('/music')
      },
      goabout() {
        this.$router.push('/about')
      },
      gofilm() {
        this.$router.push('/film')
      },
      golibrary() {
        this.$router.push('/library')
      },
      godiary() {
        this.$router.push('/diary')
      }
    },
    mounted() {
      let wythis = this
      $("#app").niceScroll();
      $("#app").scroll(function () {
        let oldtop = $("#app").getNiceScroll(0).getScrollTop();
        if (oldtop >= 480) {
          wythis.styleobj.background = '#409EFF'
        } else {
          wythis.styleobj.background = ''
        }
      })
    },
    components: {}
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
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .mgt10 {
    margin-top: 10px;
  }
.user-tab li{
  width: 100%;
  line-height: 30px;
  cursor: pointer;
  text-align: center;
}
  .user-tab li:hover{
    background: #909399;
    color: #fff;
  }
  .el-message{
    z-index: 100000 !important;
  }
  .common-card-blog {
    width: 90%;
    margin: 15px auto;
    cursor: pointer;
  }

  .main_foot {
    width: 100%;
    height: 80px;
    background: #909399;
    margin-top: 30px;
    padding-top: 20px;
  }

  .main_foot p {
    line-height: 30px;
    color: #fff;
    font-size: 14px;
  }

  .content {
    width: 1080px;
    min-height: 800px;
    margin: 480px 10% 0;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(73, 80, 96, 0.10)
  }

  .el-menu-demo {
    position: absolute !important;
    bottom: 0;
    width: 1080px;
    margin: 0 10% !important;
  }

  .btngroup {
    position: absolute;
    top: 280px;
    width: 100%;
  }

  .person img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: calc(50% - 50px);
  }

  .name {
    position: absolute;
    top: 210px;
    text-align: center;
    width: 100%;
    font-size: 20px;
    color: #fff;
  }

  .clearfloat {
    clear: both;
  }

  .zuoyouming {
    position: absolute;
    top: 240px;
    text-align: center;
    width: 100%;
    font-size: 20px;
    color: #fff;
  }

  .topbg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 480px;
    background: url(./assets/gifbg.gif) no-repeat;
    background-size: 100% 100%;
  }

  .main-head {
    position: fixed;
    top: 0;
    height: 44px;
    width: 100%;
    min-width: 1200px;
    z-index: 9999;
  }

  .geaderbg {
    position: fixed;
    top: 0;
    height: 44px;
    width: 100%;
    min-width: 1200px;
    z-index: 1;
  }

  .logo {
    position: absolute;
    left: 15px;
    height: 36px;
    top: 4px;
  }
  .haslogin{
    position: absolute;
    right: 45px;
    top: 7px;
    height: 30px;
    border-radius: 50%;
    width: 30px;
    padding: 0 !important;
  }
  .haslogin:hover{
    background: none;
  }
  .haslogin img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .home {
    position: absolute;
    left: 190px;
    height: 24px;
    top: 10px;
    cursor: pointer;
  }

  .search {
    position: absolute;
    width: 200px;
    height: 30px;
    top: 7px;
    left: calc(50% - 100px);
    border: none;
    background: rgba(255, 255, 255, 0.3);
    text-align: center;
  }

  .help {
    position: absolute;
    right: 150px;
    height: 24px;
    top: 10px;
    cursor: pointer;
  }

  .pifu {
    position: absolute;
    right: 100px;
    height: 30px;
    top: 7px;
    cursor: pointer;
  }

  .login {
    position: absolute;
    right: 35px;
    top: 15px;
    color: #fff;
    cursor: pointer;
  }

  .el-button {
    border: none;
  }

  .index_right {
    float: left;
    width: 70%;
    padding: 0 20px 20px 50px;
    box-sizing: border-box;
  }

  .box-card-blog {
    margin-bottom: 20px;
    cursor: pointer;
  }

  .blog-title {
    font-size: 28px;
    line-height: 50px;
    font-weight: 600;
    letter-spacing: 5px;
  }

  .blog-content {
    width: 100%;
    height: 160px;
    position: relative;
    margin-top: 20px;
  }

  .blog-foot {
    margin-top: 10px;
  }

  .blog-foot .blog-foot-item {
    color: #909399;
    margin: 0 20px;
  }

  .blog-content .blog-img-wrap {
    width: 30%;
    height: 120px;
    float: left;
    border: 1px solid #000;
    border-radius: 5px;
  }

  .blog-content .blog-img-wrap img {
    width: 96%;
    height: 96%;
    margin: 1% 2%;
  }

  .blog-content .blog-text-wrap {
    width: calc(70% - 12px);
    float: left;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: left;
    border-left: 5px solid #67C23A;
    margin-left: 10px;
    height: 120px;
    border-radius: 5px;
    line-height: 20px;
  }

  .index_left {
    width: 30%;
    float: left;
    padding-left: 15px;
    box-sizing: border-box;
  }

  .index_left .box-card-family, .index_left .box-card-contact {
    margin-top: 20px;
  }

  .index_left .box-card-contact .item ul li {
    width: 25%;
    float: left;
  }

  .index_left .box-card-contact .item ul li img {
    width: 100%;
  }

  .index_left .box-card-contact .item ul li p {
    margin-top: -5px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .index_left .box-card-hot .item ul li {
    text-align: left;
    line-height: 30px;
    position: relative;
  }

  .index_left .box-card-hot .item ul li span.sort-hot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #909399;
    display: inline-block;
    text-align: center;
    line-height: 22px;
    position: absolute;
    top: 2px;
    color: #fff;
  }

  .index_left .box-card-hot .item ul li:nth-of-type(1) span.sort-hot {
    background: #409EFF;
  }

  .index_left .box-card-hot .item ul li:nth-of-type(2) span.sort-hot {
    background: #67C23A;
  }

  .index_left .box-card-hot .item ul li:nth-of-type(3) span.sort-hot {
    background: #E6A23C;
  }

  .index_left .box-card-hot .item ul li span.text-hot {
    margin-left: 30px;
  }

  .detail-wrap {
    text-align: left;
    font-size: 16px;
    padding: 15px 100px;
  }

  .detail-title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .detail-remark {
    text-align: center;
    margin: 20px;
  }

  .detail-remark-item {
    margin: 0 15px;
    color: #909399;
  }

  .detail-content {
    line-height: 30px;
  }

  .detail-content h3 {
    font-weight: 600;
    font-size: 18px;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
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
