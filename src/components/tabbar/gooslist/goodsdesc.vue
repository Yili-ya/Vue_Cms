<template>
  <div>
    <h1>{{gooslist[id].title}}</h1>
    <div class="img-cont" style="text-align: center" v-for="(item, index) in img" :key="index">
      <img  id="img" style="width:95%,margin-top:10px"  :src="item.src" >
    </div>
  </div>
</template>

<script>
import gooslist from './gooslist.json'

export default {
  data(){
    return{
      gooslist,
      id:this.$route.params.id, //父级传进来的id
      img:''//图片url
    }
  },
  
  created(){
    
    this.img = this.gooslist[this.id].img_url
    console.log(this.img);
  }
}
</script>

<style lang="scss" scoped>
 #img{
   width:85%;margin-top:10px;
   box-shadow:0 0 5px;
 }
 h1{
   margin-top: 10px;
   font-size: 15px;
   text-align: center;
   color: #226AFF;
 }
</style>