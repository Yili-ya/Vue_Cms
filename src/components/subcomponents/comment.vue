<template>
  <div class="cmt-container">
    <h4>发表评论</h4><hr>
    <textarea placeholder="请输入评论(最多120字)" maxlength="120"  v-model="push"></textarea>

    <mt-button type='primary' size='large' @click='pushtext()'>发表评论</mt-button>

    <div class="cmt-list" v-for="(item,i) in text" :key="item.name">
      <div class="cmt-item">
        <div class="cmt-title">
          第{{i}}楼 &nbsp;&nbsp; 网友:{{item.name}}&nbsp;&nbsp; 发表时间:{{time[i]|dataFormat}}&nbsp;&nbsp; 
          
        </div>
        <div class="cmt-body">
         评论到:{{item.text === 'undefined' ? '用户发表了一个空格':item.text}}
        </div>
      </div>
    </div>

    <mt-button type='danger' size='large' plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";//按需导入弹框组件

import textlist from './text.json'//导入自己的评论数据



export default {
  data(){
    return{
      text:[],//评论数据
      push:'',//发表评论
      num:12,
      
    }
  },
  created(){
    this.text = textlist
   console.log(this.text);
  },
  props:['time'],//接受父组件传进来的time
  methods:{
    pushtext(){//发表评论 加载评论未完善
      if(this.push.trim().length === 0){ //验证是否输入为空
        return Toast('评论数据不能为空')
      }
      var newstext = ({"1":{name:'吃瓜网友',text:this.push}})
      this.text = newstext
      this.push = ''

      
      // console.log(this.text);
      //  this.text.push({nam:'111',id:'1213'},)
      //this.text.push({"12":{name:'吃瓜网友',text:this.push}})  未完善
      
      // this.text.unshift(newstext)
      
    }
  }
}

</script>
<style lang="scss" scope="scoped">
  .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea{
      font-size: 15px;
      height: 85px;
      margin: 0px
    }
    .cmt-list{
      margin: 10px 0;
      .cmt-item{
        font-size: 13px;
        .cmt-title{
          background-color: #ccc;
          line-height: 30px;
        }
        .cmt-body{
          line-height: 35px;
          text-indent: 2em
        }
      }
    }
  }
</style>