<template>
  <div class="home-container">
    <el-container>
      <el-header style="padding: 0; margin-bottom: 10px">
        <ComTop></ComTop>
      </el-header>
      <el-container class="bottomer">
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ComTop from "../com-top.vue";
import Aside from "./js-aside.vue";
import Main from "./js-main.vue";
export default {
  components: { ComTop, Aside, Main },
  name: "JsIndex",
  data() {
    return {};
  },
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
  // 下方部分
  .bottomer {
    margin: 0 20px;
  }
}
</style>