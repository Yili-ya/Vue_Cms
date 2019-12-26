<template>
  <!-- 主体区域 -->
  <div class="newsinfo-container">
    <!-- 标题区域 -->
    <p class="title">{{newsinfo.title}}</p>
    <div class="mui-ellipsis">
      <span>发表时间:{{newsinfo.add_time |dataFormat}}</span>
      <span>点击次数:{{newsinfo.click}}</span>
    </div>
    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.zhaiyao"></div>
    <div id="imgg">
      <img :src="newsinfo.img_url" />
    </div>
    <!-- 评论组件 -->
    <comments :time="this.time"></comments>
    <!--向组件传时间 -->
  </div>
</template>

<script>
import { Toast } from "mint-ui"; //按需导入弹框组件

import comments from "../../../subcomponents/comment.vue"; //评论组件

export default {
  data() {
    return {
      id: this.$route.params.id, //新闻id
      newsinfo: {}, //请求的数据
      time: []
    };
  },

  created() {
    this.Newsinfo();
  },
  methods: {
    Newsinfo() {
      this.$http.get("getnewslist/").then(newslist => {
        //本来是要按id查询的因为不是官方接口 没有提供传参放回队友新闻,所以这里选择传索引值获取队友新闻
        if (newslist.body.status === 0) {
          //console.log(newslist.body.message)
          this.newsinfo = newslist.body.message;

          for (var i = 0; i < 10; i++) {
            //循环时间数组 然后传递给子组件
            var a = this.newsinfo[i].add_time;
            this.time.unshift(a);
          }

          this.newsinfo = newslist.body.message[this.id];//吧当前父组件传的id赋值给数组然后渲染
        } else {
          Toast("获取失败");
        }
      });
    }
  },
  components: {
    comments //注册子组件
  }
};
</script>

<style lang="css" >
.newsinfo-container {
  padding: 0 5px;
}
.title {
  color: red;
  font-size: 18px;
  margin: 15px;
  text-align: center;
  font-weight: 600;
}

.mui-ellipsis {
  font-size: 10px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 20px;
  color: #226aff;
}
#imgg {
  padding-top: 10px;
  width: 367px;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>