import VueRouter from 'vue-router'

//导入子组件
import home    from './components/tabbar/home.vue'
import member  from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import seachh  from './components/tabbar/seach.vue'
import newList from './components/tabbar/news/newsList.vue'
import newsinfo from './components/tabbar/news/NewsInfo/newsinfo.vue'
import photos  from './components/tabbar/photos/phtoslist.vue'
import gooslist from './components/tabbar/gooslist/gooslist.vue'
import goosinfo from './components/tabbar/gooslist/goosinfo.vue'
import goodsdesc from './components/tabbar/gooslist/goodsdesc.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path : '/' ,redirect : '/home'},
    {path : '/home',   component:home},//首页
    {path : '/member', component:member},//会员
    {path : '/shopcar',component:shopcar},//购物车
    {path : '/searchh',  component:seachh},//搜索
    {path : '/home/newList',  component:newList},//首页>新闻资讯
    {path : '/home/newList/newsinfo/:id',  component:newsinfo},//首页>新闻资讯>详细
    {path : '/home/phtoslist',component:photos},//首页>图片分享
    {path : '/home/gooslist',component:gooslist}, //商品购买
    {path : '/home/goosinfo/:id',component:goosinfo,name:'gooslist'},//商品购买>商品详情
    {path : '/home/goosinfo/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},//商品购买>商品详情>商品图片详细
  ],
  linkActiveClass : 'mui-active'//给当前焦点添加高亮

})

// 把路由对象暴露出去
export default router