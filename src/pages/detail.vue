<template>
  <div class="detail-wrap">
    <div>
      <h2 class="detail-title">{{blogdata.title}}</h2>
      <p class="detail-remark">
        <span class="detail-remark-item"><i class="el-icon-edit"></i> <span>作者: {{blogdata.author}}</span></span>
        <span class="detail-remark-item"><i class="el-icon-time"></i> <span>发布时间: {{blogdata.time}}</span></span>
        <span class="detail-remark-item"><i class="el-icon-view"></i> <span>访客: {{blogdata.count}}</span></span>
      </p>
      <div class="detail-content" v-html="blogdata.content">
      </div>
      <div style="text-align: center;margin-top: 20px">
        <el-button v-if="Jurisdiction" @click="editblog" type="primary">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import nicescroll from 'jquery.nicescroll'
  import api from '../api'
  export default{
    data () {
      return {
        blogdata: {},
        id: '',
        Jurisdiction: false
      }
    },
    created() {
      this.id = this.$route.query.id
      this.getdata();
      this.addcount()
      let userId = this.$store.state.login.userId
      if (userId == 'yuriwang') {
          this.Jurisdiction = true
      }
    },
    methods: {
      addcount() {
        this.$http.get(api.addcount,{
            params: {
              id: this.id
            }
        }).then(res => {
            console.log(res)
        })
      },
      editblog() {
        this.$router.push({path: '/admin/writer',query:{id: this.id}})
      },
      getdata() {
        this.$http.get(api.getblogbyid, {
          params: {
            id: this.id
          }
        }).then(res => {
          if (res.data.resultCode == 200) {
            this.blogdata = res.data.data[0]
          }
        })
      }
    }
  }
</script>

<style>
</style>
