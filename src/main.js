//入口文件
import Vue from 'vue'

import app from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入路由组件
import router from './router.js'

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

import { Header,Swipe, SwipeItem } from 'mint-ui'
//import MintUI from'mint-ui'
import 'mint-ui/lib/style.css'
// 将MintUI安装到Vue中
Vue.component(Header.name,Header)//头部组件
Vue.component(Swipe.name, Swipe);//轮播图组件
Vue.component(SwipeItem.name, SwipeItem);//轮播图组件
//Vue.use(MintUI)


var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router //挂载路由对象
})