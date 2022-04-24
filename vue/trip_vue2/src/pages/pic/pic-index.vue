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
import Aside from "./aside.vue";
import Main from "./main.vue";
export default {
  components: { Aside, Main },
  name: "PicIndex",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>