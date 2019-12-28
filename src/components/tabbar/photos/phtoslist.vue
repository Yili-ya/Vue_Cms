<template>
  <div id="cont">
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <!-- 标题区 -->
        <a
          class="mui-control-item"
          @click="btn(i)"
          v-for="(item,i) in list"
          :key="item.id"
        >{{item.id}}</a>
      </div>
    </div>
    <!-- 主体内容区 -->

    <div>
      <p class="tit">{{this.newlist[this.key].title}}</p>
      <div class="meui">
        <span>发表时间:{{this.newlist[this.key].add_time |dataFormat}}</span>
      </div>
      <router-link to="/home/phtoslist/phtosinfo"  >
      <div id="imgg">
        <img :src="this.newlist[this.key].img_url" />
      </div>
      </router-link>
      <span>{{this.newlist[this.key].zhaiyao}}</span>
      <br />
    </div>

    <!--  吐槽区 -->
    <comments :time="this.time"></comments>
  </div>
</template>

<script>
import "../../../lib/mui/js/mui.min.js"; //mui js组件
import "../../../lib/mui/css/mui.min.css";
import "../../../lib/mui/css/icons-extra.css";

// import { Toast } from "mint-ui"; //按需导入弹框组件

// import { Toast } from "mint-ui"; //按需导入弹框组件

import comments from "../../../components/subcomponents/comment.vue"; //评论组件

export default {
  data() {
    return {
      list: [
        { id: "特斯拉" },
        { id: "长城汽车" },
        { id: "三星" },
        { id: "乐视" },
        { id: "搜狗" }
      ],

      newlist: [], //内容
      key: "2", //索引
      time: Date()
    };
  },
  created() {
    //  console.log(this.list[0].id)
    this.getlist();
    //  console.log(this.newlist);
  },
  methods: {
    getlist() {
      this.$http.get("getnewslist/").then(json => {
        this.newlist = json.body.message;
        //  console.log(this.newlist[0]);
      });
    },
    btn(id) {
      // console.log(id);
      this.key = id;
    }
  },
  components: {
    comments
  }
};
</script>

<style lang="css">
.containerr {
  padding: 0 5px;
}
.tit {
  color: red;
  font-size: 18px;
  margin: 15px;
  text-align: center;
  font-weight: 600;
}

.meui {
  font-size: 10px;
  color: black;
  display: flex;
}

#imgg {
  padding-top: 10px;
  width: 367px;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 35px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>