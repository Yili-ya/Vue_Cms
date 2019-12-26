<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" 
        v-for='(item,i) in newList' :key="item.id">
            <router-link :to="'/home/newList/newsinfo/' +i"><!-- 因为不是官方接口所以这里选择传 索引值过去获取新闻 -->
           
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                <h1>{{item.title}}</h1>
                <p class='mui-ellipsis'>
                  <span :title="item.add_time">发表时间:{{ item.add_time |dataFormat}}</span>
                  <span>点击次数:{{item.click}}</span>
                </p>
              </div>
            </router-link>
      </li>
      
      
    </ul>
  </div>
</template>

<script>

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

<style lang="css" scoped>
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