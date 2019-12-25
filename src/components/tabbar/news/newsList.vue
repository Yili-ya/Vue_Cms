<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                <h1>{{item.title}}</h1>
                <p class='mui-ellipsis'>
                  <span :title="item.add_time">发表时间:{{ item.add_time |dataFormat}}</span>
                  <span>点击次数:{{item.click}}</span>
                </p>
              </div>
            </a>
      </li>
      
      
    </ul>
  </div>
</template>

<script>
/* Vue.filter('datetime',function(datestr){//  全局/公有  时间过滤器
    //根据给定的字符串创建特定是时间 上面的datestr来自 表格里面的时间
    console.log(datestr)
    var dt = new Date(datestr)

    var y = dt.getFullYear()                                        //年
    var m = (dt.getMonth() + 1).toString().padStart(2,'0')          //月 .padStart(2,'0')函数   不足2位补齐2位 
    var d = dt.getDate().toString().padStart(2,'0')                 //日
    var hh = dt.getHours().toString().padStart(2,'0')               //时
    var mm = dt.getMinutes().toString().padStart(2,'0')             //分
    var ss = dt.getSeconds().toString().padStart(2,'0')             //秒
    
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`}) //这种方法叫做模板字符串   `${变量}` */
export default {
  
  data(){
    return{
      newList:[],
      title:'',
      time:'',

    }
  },
  created(){
    this.newlist()
    //console.log(this.title)
  },
  methods:{
    newlist(){//获取新闻get
      this.$http.get('getnewslist')
        .then(list =>{
          //console.log(list.body.message);
          this.newList = list.body.message
        })
    }
  },
 
 
}
 
</script>

<style lang="css">
  img{
    width: 40px;height: 40px
  }
  ul h1{
    font-size: 14px;
  }
  .mui-ellipsis{
    font-size: 10px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
</style>