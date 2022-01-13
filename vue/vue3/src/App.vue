<template>
  <el-container>
    <el-header class="header"></el-header>
    <el-container>
      <el-aside width="200px">
        <div class="menu-container">
          <div class="" id="create-post">
            <router-link to="/debounce">防抖节流</router-link>
          </div>
          <div>
            <router-link to="/debounce">防抖节流</router-link>
          </div>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { onMounted } from "vue";
import { Driver } from "driver.js";

export default {
  name: "App",
  components: {},
  setup() {
    onMounted(() => {
      const driver = new Driver();
      driver.highlight("#create-post");
    });
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header {
    height: 60px;
    widows: 100%;
    background: linear-gradient(to right, #032e5b, #bdebfa);
  }

  .menu-container {
    padding: 20px;
  }
}
</style>
