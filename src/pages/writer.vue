<template>
  <div class="write-wrap">
    <div class="mgt10 flt">
      <span>栏目: </span>
      <el-select v-model="colunmid" placeholder="请选择">
        <el-option v-for="item in colunmList" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="mgt10 flt">
      <span>时间: </span>
      <el-date-picker value-format="yyyy-MM-dd hh-mm-ss" v-model="valuetime" type="datetime" placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="mgt10 flt">
      <span>作者: </span>
      <el-input style="width: 220px" v-model="author" placeholder="请输入作者姓名"></el-input>
    </div>
    <div class="mgt10 flt">
      <span>标题: </span>
      <el-input style="width: 220px" v-model="title" placeholder="请输入作者姓名"></el-input>
    </div>
    <div class="mgt10 flt">
      <span>图片: </span>
      <el-input style="width: 220px" v-model="imgsrc" placeholder="请输入图片地址"></el-input>
    </div>
    <mavon-editor @save="saveContent" class="markdown" v-model="markVal"/>
    <div class="mgt10" style="text-align: center">
      <el-button @click="submit" type="primary">提交</el-button>
      <el-button @click="submitedit" type="primary">修改</el-button>
    </div>
  </div>
</template>

<script>
  import api from '../api'
  export default{
    data () {
      return {
        markVal: '',
        title: '',
        author: '',
        valuetime: '',
        colunmid: '',
        content: '',
        imgsrc: 'http://og08oq1d9.bkt.clouddn.com/blog/chenxu1.jpg',
        userid: this.$store.state.login.userId,
        colunmList: [
          {
            value: 'colunm_cxy',
            label: '程序猿笔记'
          }, {
            value: 'colunm_nba',
            label: '细说NBA'
          }, {
            value: 'colunm_ysgc',
            label: '影视工厂'
          }, {
            value: 'colunm_tsg',
            label: '图书馆'
          }, {
            value: 'colunm_sb',
            label: '随笔'
          }
        ],
        id: ''
      }
    },
    created() {
        if (this.$route.query.id) {
            this.id = this.$route.query.id
            this.getdata()
        }
    },
    methods: {
      getdata() {
        this.$http.get(api.getblogbyid, {
          params: {
            id: this.id
          }
        }).then(res => {
          if (res.data.resultCode == 200) {
            let blogdata = res.data.data[0]
            this.author = blogdata.author
            this.title = blogdata.title
            this.imgsrc = blogdata.img
            this.colunmid = blogdata.colunmname
            this.valuetime = blogdata.time
            this.markVal = blogdata.content
          }
        })
      },
      submitedit() {
        if (this.content == '') {
          this.$message.error('文章需要先保存才能提交哟...');
        } else {
          let para = {
            userid: this.userid,
            id: this.id,
            content: this.content,
            title: this.title,
            author: this.author,
            time: this.valuetime,
            img: this.imgsrc,
            zaiyao: this.markVal
          }
          para.zaiyao = para.zaiyao.replace(/<p>/g,"")
          para.zaiyao = para.zaiyao.replace(/<\/p>/g,"")
          para.zaiyao = para.zaiyao.replace(/<br \/>/g,"")
          para.zaiyao = para.zaiyao.replace(/<strong>/g,"")
          para.zaiyao = para.zaiyao.replace(/<\/strong>/g,"")
          this.$http({
            url: api.editblog,
            method: 'post',
            data: para,
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            if (res.data.code == 1) {
              this.$message.success('保存成功');
            } else {
              this.$message.error('保存失败');
            }
          })
        }
      },
      getid () {
        return (Math.random() * 10000000).toString(16).substr(0, 4) + (new Date()).getTime();
      },
      submit() {
          if (this.content == ''){
            this.$message.error('文章需要先保存才能提交哟...');
          } else if (this.title == '' || this.valuetime == '' || this.colunmid == '' || this.author == '') {
            this.$message.error('请完善信息后提交');
          } else {
              let para = {
                userid: this.userid,
                id: this.getid(),
                content: this.content,
                title: this.title,
                author: this.author,
                time: this.valuetime,
                colunm: this.colunmid,
                img: this.imgsrc,
                zaiyao: this.markVal
              }
            this.$http({
              url: api.saveblog,
              method: 'post',
              data: para,
              transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then(res => {
                if (res.data.code == 1) {
                  this.$message.success('保存成功');
                } else {
                  this.$message.error('保存失败');
                }
            })
          }
      },
      saveContent(value,renter) {
        this.content = renter
      }
    }
  }
</script>

<style>
  .write-wrap {
    text-align: left;
    padding:0 20px;
  }
  .markdown{
    clear: both;
    margin-top: 20px;
    height: 500px;
    width: 100%;
  }
  .flt{
    float: left;
    width: 50%;
    margin-bottom: 20px;
  }
</style>
