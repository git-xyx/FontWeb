<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  Vue.js App
  <div>
    <!-- //router-link定义页面中点击触发部分 -->
    <router-link to="/home"> Home</router-link>
    <router-link to="/login">Contact </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
