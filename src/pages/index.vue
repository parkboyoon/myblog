<template>
  <div class="index_wrap">
    <div class="index_left">
      <el-card class="box-card-hot" shadow="hover">
        <div slot="header" class="clearfix">
          <span>热门文章</span>
        </div>
        <div class="text item">
          <ul>
            <li><span class="sort-hot">1</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">2</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">3</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">4</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">5</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">6</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">7</span> <span class="text-hot">我的第一篇</span></li>
            <li><span class="sort-hot">8</span> <span class="text-hot">我的第一篇</span></li>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card-family" shadow="hover">
        <div slot="header" class="clearfix">
          <span>伐木累</span>
        </div>
        <div class="text item">
          <ul>
            <li><a href="https://www.baidu.com/">百度</a></li>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card-contact" shadow="hover">
        <div slot="header" class="clearfix">
          <span>联系我</span>
        </div>
        <div class="text item">
          <ul>
            <li>
              <el-tooltip class="item" effect="dark" content="点击弹出QQ号" placement="top">
                <el-button><img src="../assets/qq.png" alt=""></el-button>
              </el-tooltip>
              <p>QQ</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="点击弹出微信二维码" placement="top">
                <el-button><img src="../assets/weixin.png" alt=""></el-button>
              </el-tooltip>
              <p>微信</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="点击跳转至微博" placement="top">
                <el-button><img src="../assets/weibo.png" alt=""></el-button>
              </el-tooltip>
              <p>微博</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="点击显示邮箱号" placement="top">
                <el-button><img src="../assets/youxiang.png" alt=""></el-button>
              </el-tooltip>
              <p>邮箱</p>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
    <div class="index_right">
      <div v-for="item in blogList" @click="godetail(item.id)">
        <el-card class="box-card-blog" shadow="hover">
          <h3 class="blog-title">{{item.title}}</h3>
          <div class="blog-content">
            <div class="blog-img-wrap"><img :src="item.img" alt=""></div>
            <div class="blog-text-wrap">
              文章摘要：{{item.zaiyao.substr(0, 130)}}...
            </div>
          </div>
          <div class="blog-foot">
            <span class="blog-foot-item"><i class="el-icon-edit"></i> <span>作者: {{item.author}}</span></span>
            <span class="blog-foot-item"><i
              class="el-icon-time"></i> <span>发布时间: {{item.time.split(' ')[0]}}</span></span>
            <span class="blog-foot-item"><i class="el-icon-view"></i> <span>围观: {{item.count}}</span></span>
          </div>
        </el-card>
      </div>
    </div>
    <div class="clearfloat">
      <el-pagination background layout="prev, pager, next" :current-page="pageNum" @current-change="pagechange" :page-count="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import api from '../api'
  export default{
    data() {
      return {
        blogList: [],
        totalPage: 1,
        pageNum: 1
      }
    },
    created() {
      this.getdata()
    },
    methods: {
      pagechange(val) {
          this.pageNum = val
          this.getdata()
      },
      getdata() {
        this.$http.get(api.getblog, {
          params: {
            colunm: '',
            pageSize: 5,
            pageNum: this.pageNum
          }
        }).then(res => {
          if (res.data.resultCode == 200) {
            this.totalPage = res.data.totleNum
            let data = res.data.data
            this.blogList = data
          }
        })
      },
      godetail(id) {
        this.$router.push({path: '/detail', query: {id: id}})
      }
    }
  }
</script>

<style>

</style>
