<template>

  
  
  <div id="Lun">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格     -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
         <img :src="img1"/>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/phtoslist" >
          <img :src="img2" />
          <span class="mui-badge">5</span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/gooslist">
          <img :src="img3" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="img4" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="img5" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="img6" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
  
</template>

<script>


export default {
  data() {
    return {
      //轮播图 数组
      lunbotulist: [],
      img1:'../../src/imges/1.png',
      img2:'../../src/imges/2.png',
      img3:'../../src/imges/3.png',
      img4:'../../src/imges/4.png',
      img5:'../../src/imges/5.png',
      img6:'../../src/imges/6.png',
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      //发起轮播图 图片请求
      this.$http.get("getnewslist").then(jpg => {
          this.lunbotulist = jpg.body.message;
          //console.log( this.lunbotulist);
        });
    }
  }
};



</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
  width: 60px;
  height: 60px;
}
#Lun{
  
  width: 100%;
  height: 700px;
  background-color: rgb(254,255,255)
  
}
#Lun ul{
  background-color: rgb(254,255,255)

}

.mint-swipe {
   width: 100%;
  height: 200px;;
  img {
  width: 100%;
  height: 100%;
}
}


</style>
