<template>
  <div class="cmt-container">
    <h4>发表评论</h4><hr>
    <textarea placeholder="请输入评论(最多120字)" maxlength="120"></textarea>

    <mt-button type='primary' size='large'>发表评论</mt-button>

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
//import { Toast } from "mint-ui";//按需导入弹框组件

import textlist from './text.json'//导入自己的评论数据

export default {
  data(){
    return{
      text:[],
      
    }
  },
  created(){
    this.text = textlist
   console.log(this.text);
  },
  props:['time']//接受父组件传进来的time
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