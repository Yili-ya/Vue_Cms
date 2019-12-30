<template>
  <div id="mui-content">
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in ImgSrc" :key="i">
              <img :src="item.src" />
            </mt-swipe-item>
          </mt-swipe>
          
        </div>
      </div>
    </div>

    <!-- 商品 -->
    <div class="mui-card">
      <div class="mui-card-header">{{gooslist[this.id].title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="num-list">
            <div class="num">
            <!-- 价格 -->
            市场价:<span class="oldnum">{{gooslist[this.id].oldnum}}</span>
            <span class="nownum">销售价:{{gooslist[this.id].nownum}}</span>
            </div>
            <p>购买数量:&nbsp;&nbsp;&nbsp;<numbox ></numbox></p>
            <p>
              <mt-button type='primary' size='small'>立即购买</mt-button>
              <mt-button type='danger' size='small'>立即购买</mt-button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品参数  -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="text">
            <p>商品货号:{{gooslist[0].goods}}</p>
            <p>库存情况:{{gooslist[this.id].surplus}}</p>
            <p>上架时间:{{time | dataFormat}}</p>
          </div>
        </div>
      </div>
      <!--图文介绍 & 商品评论 -->
      <div class="mui-card-footer">
        <mt-button type='primary' size='large' plain @click='text(id)' >图文介绍</mt-button><br>
        <mt-button type='danger' size='large' plain  @click='flag=true'>商品评论</mt-button>
      </div>

      <comments v-show='flag'></comments>
    </div>
    
  </div>
</template>

<script>
import gooslist from './gooslist.json'//导入自定义商品数据

import numbox from './goosinfo-numbox.vue'

import comments from '../../subcomponents/comment.vue'

//先导入商品数据
//然后用 id 渲染对应的商品

export default {
  data() {
    return {
      //轮播图 数组
      id:this.$route.params.id,//传进来的商品id
      ImgSrc:'',// 存放 轮播图路径
      gooslist,//return 一下商品数据不然商品渲染渲染不到
      time:Date(),
      texttitle:'',//要被传进子组件的标题
      flag:false//定义评论组件的加载
    }
  },
  created() {
    // this.getlunbotu();
    // console.log(gooslist[0].img_url);
    this.ImgSrc =  gooslist[this.id].img_url
  },
  methods: {
    // getlunbotu() {
    //   //获取轮播图 数据
    //   // console.log(gooslist);
    // },
  
    text(id){//编程时导航加载图文介绍
      this.$router.push({name:'goodsdesc',params:{id}})
      
      this.texttitle = gooslist[this.id].title
      
    },
    img(){//加载评论
      
    },
  },
  components:{
    numbox,
    comments
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  text-align: center;
  width: 100%;
  height: 200px;
  min-height: 200px;
  img {

    width: 70%;
    height:100%;
    min-height: 200px;
  }
}

.num-list{
  .num{
    margin-bottom: 10px;
   .oldnum{
    font-size: 12px;
    text-decoration: line-through;
  }
  .nownum{
    margin-left: 12px;
    font-size: 16px;
    color: red;
    font-weight: bold;
  } 
  }
  

}
.mui-card-footer{
  display: block;
  button{
    margin:15 0;
  }
}

 
</style>