<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner goods-item">
            <!-- 开关 -->
            <mt-switch v-model="$store.getters.getGoodsselected[item.id] "
            @change='selectedChanged(item.id,$store.getters.getGoodsselected[item.id] )'></mt-switch>
            <!-- 图片 -->
            <img :src="item.imgurl" />
            <!-- 信息区域 -->
            <div class="info">
              <h1>{{item.title}}</h1>
              <div class="goods-info">
                <span class="price">￥{{ item.price}}</span>&nbsp;&nbsp;
                <!-- countObj[item.id] 表示这条商品对应的数量 -->
                <nobox :value="goodslist[0].count" :id='item.id'></nobox>
                <a href="#" @click.prevent="del(item.id,i)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="danger">{{ $store.getters.totalPrice.number }}</span>件，总价
                <span class="danger">￥{{ $store.getters.totalPrice.price }}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
      
      <!-- {{ JSON.stringify(seletedObj) }} -->
    </div>
    <p>{{$store.getters.getGoodsselected}}</p>
    <p>{{this.$store.state.car}}</p>
  </div>
</template>

<script>
// import { mapGetters, mapMutations } from "vuex";
import nobox from "../subcomponents/goodsinfo_nobox.vue";

export default {
  data() {
    return {
      goodslist: [], // 商品列表
      img1: "./src/imges/2333.jpg",
      
    };
  },
  created() {
    if (this.$store.state.car.length < 0)  return;
    // console.log('233');
    this.goodslist = this.$store.state.car;
    //  console.log(this.goodslist[0].count);
    
  },
  methods: {
    del(id,index){//删除
      this.goodslist.splice(index,1)//删除网页列表
      this.$store.commit('remove',id)
    },

    selectedChanged(id,val){
     this.$store.commit('selectedChanged',{id,selected:val})
    }
  },
  components: {
    nobox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-item {
    display: flex;
    img {
      width: 60px;
      height: 60px;
      
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .goods-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: red;
          font-weight: bold;
          font-size: 16px;
          
        }
      }
    }
  }
}

.danger {
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
