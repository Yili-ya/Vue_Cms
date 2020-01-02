<template>
  <div>未完善</div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        "1": {
          StartNum: "3423.41",
          StopLoss: "30%",
          flatNum: "1289.38",
          Loss: "-0.03",
          Stop: "默认",
          flat1Num: "1289.38"
        },
        "2": {
          StartNum: "3423.40",
          StopLoss: "30%",
          flatNum: "1289.38",
          Loss: "-0.03",
          Stop: "默认",
          flat1Num: "1289.38"
        }
      }
    };
  },
  created() {
    console.log();
  }
};
</script>

<style scoped>
li {
  margin: 10px 0;
}
</style>