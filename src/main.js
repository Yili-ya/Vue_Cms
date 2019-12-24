//入口文件
import Vue from 'vue'

import app from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resourse
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入路由组件
import router from './router.js'

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 将按需导入MintUI
import { Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)//头部组件
Vue.component(Swipe.name, Swipe);//轮播图组件
Vue.component(SwipeItem.name, SwipeItem);//轮播图组件



var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router //挂载路由对象
})