<template>
  <div class="progra-wrap">
    <div v-for="item in progList" @click="godetail(item.id)">
      <el-card class="common-card-blog" shadow="hover">
        <h3 class="blog-title">{{item.title}}</h3>
        <div class="blog-content">
          <div class="blog-img-wrap"><img :src="item.img" alt=""></div>
          <div class="blog-text-wrap">
            文章摘要: {{item.zaiyao.substr(0,200)}}...
          </div>
        </div>
        <div class="blog-foot">
          <span class="blog-foot-item"><i class="el-icon-edit"></i> <span>作者: {{item.author}}</span></span>
          <span class="blog-foot-item"><i class="el-icon-time"></i> <span>发布时间: {{item.time.split(' ')[0]}}</span></span>
          <span class="blog-foot-item"><i class="el-icon-view"></i> <span>围观: {{item.count}}</span></span>
        </div>
      </el-card>
    </div>
    <div class="clearfloat">
      <el-pagination background layout="prev, pager, next" :current-page="pageNum" @current-change="pagechange" :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import api from '../api'
  export default{
    data () {
      return {
        progList: [],
        pageNum: 1,
        totalPage: 1
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
      godetail(id) {
        this.$router.push({path: '/detail',query:{id: id}})
      },
      getdata() {
        this.$http.get(api.getblog, {
          params: {
            colunm: 'colunm_cxy',
            pageSize: 5,
            pageNum: this.pageNum
          }
        }).then(res => {
          if (res.data.resultCode == 200) {
            this.totalPage = res.data.totleNum
              this.progList = res.data.data
          }
        })
      }
    }
  }
</script>

<style>

</style>
