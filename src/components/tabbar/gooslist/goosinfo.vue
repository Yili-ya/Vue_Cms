<template>
  <div id="mui-content">
    <!-- 动画小球 -->
    <transition 
    @before-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter"> 
    </transition>         <!-- ref绑定小圆点然后通过dom获取长宽 -->
     <!--  <div class="ball" v-show="flag" ref="ball"></div> -->
    

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
              市场价:
              <span class="oldnum">{{gooslist[this.id].oldnum}}</span>
              <span class="nownum">销售价:{{gooslist[this.id].nownum}}</span>
            </div>
            <p>
              <!-- 在实际开发中这里传递的值,可能还没通过ajax获取过来所以是defined 
                ,所以要在子组件定义 watch监听一下这个值的改变 -->
              购买数量:&nbsp;&nbsp;&nbsp;           
              <numbox @getCount='getSelectedCound' :surplusid='surplus' ></numbox><!--调用子组件的时候传递一个方法-->
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
              <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
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
        <mt-button type="primary" size="large" plain @click="text(id)">图文介绍</mt-button>
        <br />
        <mt-button type="danger" size="large" plain @click="textt(commt)">商品评论</mt-button>
      </div>

      <comments v-show="commt"></comments>
    </div>
  </div>
</template>

<script>
import gooslist from "./gooslist.json"; //导入自定义商品数据

import numbox from "./goosinfo-numbox.vue";

import comments from "../../subcomponents/comment.vue";

import { Toast } from "mint-ui";

//先导入商品数据
//然后用 id 渲染对应的商品

export default {
  data() {
    return {
      //轮播图 数组
      id: this.$route.params.id, //传进来的商品id
      ImgSrc: "", // 存放 轮播图路径
      gooslist, //return 一下商品数据不然商品渲染渲染不到
      time: Date(),
      texttitle: "", //要被传进子组件的标题
      commt: false, //定义评论组件的加载
      flag: false ,//定义小球的出现&消失
      thiscount:1,//定义购物车默认值
      surplus:'',//当前页面库存
      car:[],//用来存放购物车的数据
    };
  },
  created() {
    
    // this.getlunbotu();
    // console.log(gooslist[0].img_url);
    this.ImgSrc = gooslist[this.id].img_url;
    this.surplus = gooslist[this.id].surplus
  },
  methods: {
    // getlunbotu() {
    //   //获取轮播图 数据
    //   // console.log(gooslist);
    // },

    text(id) {
      //编程时导航加载图文介绍
      this.$router.push({ name: "goodsdesc", params: { id } });

      this.texttitle = gooslist[this.id].title;
    },
    textt(commt) {
      //加载评论
      if (commt == false) return (this.commt = true);
        
      else if (commt == true)  return Toast("评论已加载完毕");
       
      
    },
    
    beforeEnter(el) {
      // 入场动画开始之前，设置小球的起始状态
      el.style.transform = "translate(0, 0)";
    },

    enter(el, done) {
      //获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      //通过dom.id 获取购物车的位置
      const badgePosPosition = document.getElementById('badge').getBoundingClientRect()
      
      const ballx = badgePosPosition.x - ballPosition.x //小球移动到购物车的距离
      const bally = badgePosPosition.y - ballPosition.y //小球移动到购物车的距离

      // console.log(ballx,bally);

      el.offsetWidth;
      el.style.transform = `translate(${ballx}px,${bally}px)`;

      el.style.transition = "all 0.5 ease"; //

      setTimeout(function() {
        done();
      }, 0.8);
      
    },

    afterEnter(el) {
      // 入场动画完成之后的回调函数
      this.flag = !this.flag;
    },
    getSelectedCound(count){//定义一个方法传递给子组件
      this.thiscount = count //吧子组件传回来的值赋值给当前购物车数量
      // console.log('购物车数量的值位'+this.thiscount);
    },
    
    addToCart() {//显示小球与隐藏
     // this.flag = !this.flag;小球的动画
      /* {id:商品的id , count : 购买的数量 , price: 商品的单价 , selected:false 商品是否被选中 加入计算} */
      //点击购物车时 的商品信息
      this.car = {id:this.id, count:this.thiscount, price:gooslist[this.id].nownum, selected:true,  imgurl:this.gooslist[this.id].img_url[0].src,  title:this.gooslist[this.id].title}
      // console.log(this.gooslist[this.id].title);
      this.$store.commit('goosinfo',this.car)
      console.log(this.car);
    },
    
  },
  components: {
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
    height: 100%;
    min-height: 200px;
  }
}

.num-list {
  .num {
    margin-bottom: 10px;
    .oldnum {
      font-size: 12px;
      text-decoration: line-through;
    }
    .nownum {
      margin-left: 12px;
      font-size: 16px;
      color: red;
      font-weight: bold;
    }
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 15 0;
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  left: 149px;
  top: 410px;
}
</style>