<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="surplus">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" 
    @change="coundChanged" ref="num"/><!-- 每当文本框内的值发生改变的时候就会触发change事件 -->
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>


export default {
  data(){
    return{
      surplus:'',//库存剩余
      
    }
  },
  props:['surplusid'],//父组件传递过来的库存数
  created(){  
    this.surplus = this.surplusid //赋值当前库存剩余
  },
  mounted(){
    //初始化选中的数字选择框组件
    //  mui('.mui-numbox').numbox();
    // console.log();
  },
  
  watch:{
    /* 以为现在的数据是本地数据加载比较快 所以可以在一开始的时候给库存赋值一个父组件传递过来的值
        但在实际开发中 可能父组件还没 运行到吧库存传递给子组件所以可能导致defined 所以这里用
        watch监听了下 surplusid值的改变 一改变就给 surplus赋予新的值*/
    // 'surplusid':function(newVal,oldVal){
    //   mui('.mui-numbox').numbox().setOption('max',newVal)
    // }
  },

  methods:{
    coundChanged(){
      // console.log(this.$refs.num.value);
      this.$emit('getCount',parseInt(this.$refs.num.value))
    },
    
  },
  
}
</script>

<style lang="scss">
  
</style>