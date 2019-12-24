<template>

  
  
  <div>
    <mt-swipe :auto="4000">
      <!-- 轮播图 -->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格     -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../imges/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imges/menu1.png" />
          <span class="mui-badge">5</span>

          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imges/menu1.png" />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imges/menu1.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imges/menu1.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imges/menu1.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
  
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      //轮播图 数组
      lunbotulist: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      //发起轮播图 图片请求
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(jpg => {
          this.lunbotulist = jpg.body.message;
          //console.log(this.lunbotulist);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
  width: 60px;
  height: 60px;
}



</style>
