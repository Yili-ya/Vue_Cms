//入口文件
import Vue from 'vue'

import app from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
import 'mint-ui/lib/style.css'

//导入V-viewer点击图片预览组件 
import Viewer from 'v-viewer'
import '_viewerjs@1.5.0@viewerjs/dist/viewer.css'
Vue.use(Viewer)//注册全局v-viewer组件
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router //挂载路由对象
})