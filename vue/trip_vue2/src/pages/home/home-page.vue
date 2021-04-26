<template>
  <div class="home-container">
    <el-container>
      <el-header class="header">
        <div class="header-div">
          <span>---------Trav---------</span>
        </div>
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
import Aside from "./aside.vue";
import Main from "./main.vue";
export default {
  components: { Aside, Main },
  name: "HomePage",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home-container {
  min-height: 700px;
  background-color: #e7eaed;
  // 固定头部栏
  .header {
    margin-bottom: 10px;
    background: linear-gradient(to right, #032e5b, #bdebfa);

    .header-div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      span {
        font-size: 20px;
        color: green;
      }
    }
  }
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