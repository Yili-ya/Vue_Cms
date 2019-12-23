//入口文件
import Vue from 'vue'

import app from './App.vue'

//导入MUI的样式
import './lib/mui/css/mui.min.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 将MintUI安装到Vue中
Vue.use(MintUI)

var vm = new Vue({
  el:'#app',
  render:c => c(app)
})