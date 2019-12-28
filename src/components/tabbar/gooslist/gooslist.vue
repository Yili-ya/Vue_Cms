<template>
  <div>
    <div class="goods-list">
      
      <div class="goods-item">
        <img src="https://img.alicdn.com/imgextra/i4/1114511827/O1CN01O9I4jB1PMo8ZV4Sce_!!1114511827.jpg_430x430q90.jpg">
        <h1 class="title">华为(HUAWEI)HONOR荣耀8X</h1>
        <div class="info">
        
          <p class="price">
            <span class="now">¥2199</span>
            <span class="old">1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>

      <div class="goods-item">
        <img src="https://img.alicdn.com/imgextra/i4/1114511827/O1CN01O9I4jB1PMo8ZV4Sce_!!1114511827.jpg_430x430q90.jpg">
        <h1 class="title">华为(HUAWEI)HONOR荣耀8X</h1>
        <div class="info">
        
          <p class="price">
            <span class="now">¥2199</span>
            <span class="old">1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img src="https://img.alicdn.com/imgextra/i4/1114511827/O1CN01O9I4jB1PMo8ZV4Sce_!!1114511827.jpg_430x430q90.jpg">
        <h1 class="title">华为(HUAWEI)HONOR荣耀8X</h1>
        <div class="info">
        
          <p class="price">
            <span class="now">¥2199</span>
            <span class="old">1999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>

      

    </div>
  </div>
</template>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap:wrap;
  padding:7px;
  justify-content: space-between;
  min-height:293px;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    margin: 4px 0;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content:space-around;

    img{
      width: 100%;
    }
    .title{
      color: black;
      font-size: 15px;
      text-align: left
    }
    .info{
      background-color: #ddd;
      .price{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        .now{
          padding: 10px;
          color: red;
          font-size:18px;
          
        }
        .old{
          padding-right:70px;
          padding-top: 10px;
          text-decoration: line-through;
          font-size:12px;
        }
      }
      .sell{
        margin: 0 5px;
        
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
      }
    }
  }
}
  
</style>