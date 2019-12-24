import VueRouter from 'vue-router'

//导入子组件
import home    from './components/tabbar/home.vue'
import member  from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import seachh   from './components/tabbar/seach.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path : '/' ,redirect : '/home'},
    {path : '/home',   component:home},
    {path : '/member', component:member},
    {path : '/shopcar',component:shopcar},
    {path : '/searchh',  component:seachh},
  ],
  linkActiveClass : 'mui-active'//给当前焦点添加高亮

})

// 把路由对象暴露出去
export default router