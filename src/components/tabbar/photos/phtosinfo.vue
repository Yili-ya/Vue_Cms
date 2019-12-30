<template>
<div class="newsinfo-container">
  <br>
    <p>{{newsinfo.title}}</p>
    
    <div class="mui-ellipsis">
      <span>发表时间:{{newsinfo.add_time |dataFormat}}</span>
      
    </div>
    <hr />
    <!-- 内容区域 -->
    <div class="box">
    <div class="imgcss">
    <viewer :images="photo"> 
      <img width="100%" height="100%"
        v-for="(src,index) in photo"
        :src="src"
        :key="index"
        :onerror="errorImg"
      >
    </viewer>
    </div>
  </div>
</div>
</template>

<script>
export default { 
  data(){
    return{
      newsinfo : [],
      photo:[
        './src/imges/2019-12-17 (83).png',
        './src/imges/2019-12-17 (84).png',
        './src/imges/2019-12-17 (90).png',
        './src/imges/2019-12-17 (92).png',
        './src/imges/2019-12-17 (94).png',
      ]
    }
  },
  created(){
    this.getid()
  },
  methods:{
    getid(){
      this.$http.get('getnewslist/').then(id =>{
        // console.log(id.body.message[0]);
        this.newsinfo = id.body.message[0]
        
      })
    }
  }
}
</script>

<style lang="scss">
.newsinfo-container{
  

  .imgcss{
    padding: 5px;
    box-shadow:0 0 5px;
    margin: 5px;
  }
}
  
</style>
