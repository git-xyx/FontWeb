<template>
  <div class="home-container">
    <el-container class="com-main-area">
      <el-aside class="com-right-menu">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from "./css-aside.vue";
import Main from "./css-main.vue";
export default {
  components: { Aside, Main },
  name: "CssIndex",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.home-container {
  min-height: 700px;
  background-color: #e7eaed;
  .el-aside {
    height: 610px;
    background-color: #fff;
  }
  .el-main {
    padding: 0 20px;
    margin: 0 20px;
    background-color: #fff;
  }
}
</style>