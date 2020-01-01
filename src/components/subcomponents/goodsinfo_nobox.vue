<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='9'>
    <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" :value="value" 
     @change='countChanged' ref='numbox'  readonly/><!-- 加入readonly后只能用过 加减按钮进行修改数字 不能用输入框了 -->
    <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
  </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  props:['value','id'],
  mounted() {
    // 当组件挂载到页面中之后，去初始化 数字框
    // console.log(this.max);
    // mui(".mui-numbox").numbox();
    // console.log(this.value);
    // console.log(this.value);
  },
  created(){
    // console.log(this.value);
  },
  methods: {
    countChanged() {
      // 获取选择的商品数量
    // console.log(this.$refs.numbox.value,this.id);

      this.$store.commit('newgoosinfo',{

        count:this.$refs.numbox.value,

        id:this.id})
       
    },
    
  },
  
}

</script>

<style lang="scss" scoped>

</style>
