<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/home">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
  </div>
</template>

<script>
export default {
  name: "app",

  mounted() {
    window.onhashchange = () => {
      console.log("hash变化为" + location.hash);
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
