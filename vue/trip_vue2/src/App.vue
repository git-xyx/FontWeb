<template>
  <div id="app">
    <!-- <home-page /> -->
    <div>
      <!-- //router-link定义页面中点击触发部分 -->
      <!-- <router-link to="/home">首页</router-link> -->
      <!-- <router-link to="/page2">Page2</router-link> -->
    </div>
    <!-- //router-view定义页面中显示部分 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./pages/home/home-page.vue";

export default {
  name: "app",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
