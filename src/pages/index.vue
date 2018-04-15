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
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button><img src="../assets/qq.png" alt=""></el-button>
              </el-tooltip>
              <p>QQ</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button><img src="../assets/weixin.png" alt=""></el-button>
              </el-tooltip>
              <p>微信</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button><img src="../assets/weibo.png" alt=""></el-button>
              </el-tooltip>
              <p>微博</p>
            </li>
            <li>
              <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button><img src="../assets/youxiang.png" alt=""></el-button>
              </el-tooltip>
              <p>邮箱</p>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
    <div class="index_right">
      <el-card class="box-card-blog" shadow="hover">
        <h3 class="blog-title">前端初学路线指南</h3>
        <div class="blog-content">
          <div class="blog-img-wrap"><img src="../assets/person.jpg" alt=""></div>
          <div class="blog-text-wrap">
            之所以写这么长，是因为题主洋洋洒洒列了一大堆想学的东西，过于多了，贪多嚼不烂。

            而且，学东西，总要分个轻重缓急的。任何一门知识，都有个层次，有些知识的前置知识多，后置知识少，就适合后学；有些知识前置知识少，后置知识多，就得先学，而且要认真学；还有些知识，和科目中的大部分东西都不相关，一时半会儿也用不上，这种就可以暂时搁不学（比如canvas）
          </div>
        </div>
        <div>
          <span></span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default{
      data() {
          return {}
      }
  }
</script>

<style>
  .el-button{
    border: none;
  }
  .index_right{
    float: left;
    width: 70%;
    padding: 0 20px 20px 50px;
    box-sizing: border-box;
  }
  .box-card-blog .blog-title{
    font-size: 28px;
    line-height: 50px;
    font-weight: 600;
    letter-spacing: 5px;
  }
  .blog-content{
    width: 100%;
    height: 160px;
    position: relative;
    margin-top: 20px;
  }
  .blog-content .blog-img-wrap{
    width: 30%;
    height: 160px;
    float: left;
    border: 1px solid #000;
    border-radius: 5px;
  }
  .blog-content .blog-img-wrap img{
    width: 96%;
    height: 96%;
    margin: 2% 2%;
  }
  .blog-content .blog-text-wrap{
    width: calc(70% - 2px);
    float: left;
  }
  .index_left{
    width: 30%;
    float: left;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .index_left .box-card-family,.index_left .box-card-contact{
    margin-top: 20px;
  }
  .index_left .box-card-contact .item ul li{
    width: 25%;
    float: left;
  }
  .index_left .box-card-contact .item ul li img{
    width: 100%;
  }
  .index_left .box-card-contact .item ul li p{
    margin-top: -5px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  .index_left .box-card-hot .item ul li{
    text-align: left;
    line-height: 30px;
    position: relative;
  }
  .index_left .box-card-hot .item ul li span.sort-hot{
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
  .index_left .box-card-hot .item ul li:nth-of-type(1) span.sort-hot{
    background: #409EFF;
  }
  .index_left .box-card-hot .item ul li:nth-of-type(2) span.sort-hot{
    background: #67C23A;
  }
  .index_left .box-card-hot .item ul li:nth-of-type(3) span.sort-hot{
    background: #E6A23C;
  }
  .index_left .box-card-hot .item ul li span.text-hot{
    margin-left: 30px;
  }
</style>
