<template>
  <div>
    <div class="goods-list">
      <div class="goods-item" v-for="(item,i) in shoplist" :key="i" @click="router(i)">
        <img :src="item.img" />
        <h1 class="title">{{item.title}}</h1>

        <div class="info">
          <p class="price">
            <span class="now">¥{{item.nownum}}</span>
            <span class="old">{{item.oldnum}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.surplus}}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click.prevent="btn()" class="move">加载更多</mt-button>
  </div>
</template>

<script>
import shoplist from "./gooslist.json"; //导入自定义的商品数据

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      shoplist //这里必须return一下shoplist 不然在上面是渲染不到的!!!!!!!!!!!!!!!!!!!!!!
    };
  },

  created() {
    var move = document.querySelector(".move");
  },
  //由于没有数据接口这模拟一个本地接口
  methods: {
    router(i) {
      this.$router.push({ path: "/home/goosinfo/" + i });
      // this.$router.push({name:'gooslist',params:{id:i}})
    },
    btn() {
      return Toast("商品已加载完毕");
    }
  }
};
</script>

<style lang="scss" scoped>
.move {
  position: absolute;
  bottom: 50px;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin: 4px 0;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
      width: 100%;
    }
    .title {
      color: black;
      font-size: 15px;
      text-align: left;
      min-height: 45px;
    }
    .info {
      background-color: #ddd;

      .price {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .now {
          padding: 10px;
          color: red;
          font-size: 18px;
        }
        .old {
          padding-right: 70px;
          padding-top: 10px;
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      .sell {
        margin: 0 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>