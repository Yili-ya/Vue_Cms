//入口文件
import Vue from 'vue'

import app from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入并注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//导入vue-resourse
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/api'

//导入路由组件
import router from './router.js'

import moment from 'moment'
//全局时间过滤器
Vue.filter('dataFormat',function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment (dataStr).format(pattern)
})


//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'




// 将按需导入MintUI
// import { Header,Swipe, SwipeItem ,Button} from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header)//头部组件
// Vue.component(Swipe.name, Swipe);//轮播图组件
// Vue.component(SwipeItem.name, SwipeItem);//轮播图组件
// Vue.component(Button.name, Button);//轮播图组件
import mintUi from 'mint-ui'
Vue.use(mintUi)
import 'mint-ui/lib/style.min.css'


//导入V-viewer点击图片预览组件 
import Viewer from 'v-viewer'
import '_viewerjs@1.5.0@viewerjs/dist/viewer.css'
Vue.use(Viewer)//注册全局v-viewer轮播图组件
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})
//每次进入网站 调用main.js 在调用的时候,先从本地存储中吧购物车的数据读出来
// 放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({//vuex 全局状态管理

  state:{// this.$sotre.state.***
    car:car,
    /* {id:商品的id , count : 购买的数量 , price: 商品的单价 , selected:false 商品是否被选中 加入计算} */
    newnum:0//购物车的数量
  },
  ////////////////////////////////////////////////////////////////
  mutations:{//this.$store.commit('方法名称','按需传递参数&对象')
    goosinfo(state,goosinfo){//传递商品给购物车的数据 判断
      // console.log(state,goosinfo);
      var flag = false
      
      //查询之前有没有添加过同样的商品 如果有吧数量加上去
      state.car.some(item =>{
        if(item.id == goosinfo.id){
          // console.log(item.id,goosinfo.count);
          item.count += parseInt(goosinfo.count)  //这里因为是在商品页面 在购物车可能之前已
          flag = true                             // 经添加过同样的商品所有要和之前的值 += 不能覆盖
          return true
        }
      })
      //如果没有添加一条新的商品数据
      if(!flag){
        state.car.push(goosinfo)
      }
      //当更新car 之后 ,吧car 数组存储到本地localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    newgoosinfo(state,goodsinfo){
      // console.log(goodsinfo.id,goodsinfo.count);
      state.car.some(item =>{
        if(item.id === goodsinfo.id){
          console.log(item.count);
          item.count = parseInt(goodsinfo.count) //这里是在购物车页面 所有直接覆盖就可以了
          return true                             //+= 会数字不正常
        }
      })

      localStorage.setItem('car',JSON.stringify(state.car))
    },

    remove(stare,id){//删除传过来id对应的 商品冰刷新最新的列表
      stare.car.some((item,i) =>{
        if(item.id == id){
          stare.car.splice(i,1)
        }
      })
      localStorage.setItem('car',JSON.stringify(stare.car))
    },
    selectedChanged(stare,info){//保存按钮开光选中状态
      stare.car.some(item=>{
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(stare.car))
    },
    
  },
  ////////////////////////////////////////////////////////////////
  getters:{//this.$store.getters.***
    num(state){
      var c = 0;
      state.car.forEach(item=>{
        c += parseInt(item.count)
        // console.log(c);
          // if(item.count.length<0) return true
      })
      return c 
    },

    getGoodsselected(stare){//默认选中状态
      var o = {}
      stare.car.forEach(item=>{
        o[item.id] = item.selected
      })
      return o
    },

    // Total price
    totalPrice(stare){//计算件数和总价
      var o = {
       number: 0,
       price: 0,
      };
      stare.car.forEach(item=>{
        if(item.selected ){
          o.number += item.count;
          o.price += item.price * item.count
          // console.log(o.number,o.price);
        }
      })
      return o
    }
    
  },

})

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router, //挂载路由对象
  store, //挂载全局vuex
})