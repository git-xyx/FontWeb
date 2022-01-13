<template>
  <div class="container">
    <div class="input-area">
      <!-- <el-input
        class="input"
        v-model="input"
        placeholder="请输入内容"
      ></el-input> -->
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "debounce",
  data() {
    return {
      msg: "fwefwef",
    };
  },
  props: {
    // msg: {
    //   type: String,
    //   default: "hhhhh",
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  .input-area {
    width: 180px;
    height: 30px;
    .input {
      height: 100%;
    }
  }
}
</style>
