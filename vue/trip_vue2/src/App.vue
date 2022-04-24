<template>
  <div id="app">
    <el-header>
      <div class="icon-menu">
        <router-link to="/home">
          <img class="sys-icon" src="./assets/app/sys-icon.jpg" alt="" />
        </router-link>
        <div
          class="menu-item"
          v-for="(item, i) in menuList"
          :key="i"
          @click="menuClick(item)"
        >
          <span>
            {{ item.name }}
          </span>
          <el-divider
            direction="vertical"
            v-if="i !== menuList.length - 1"
          ></el-divider>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menuList: [
        { name: "图片集合", path: "/pic" },
        { name: "css-效果模块", path: "/css-module/css_transtion" },
        { name: "js-模块", path: "/js-module" },
      ],
    };
  },
  mounted() {
    window.onhashchange = () => {
      console.log("hash变化为" + location.hash);
    };
  },
  methods: {
    menuClick(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  .el-header {
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: linear-gradient(to right, #032e5b, #bdebfa);
    color: #333;
    line-height: 60px;

    .icon-menu {
      display: flex;
      height: 60px;
      .sys-icon {
        width: 50px;
        height: 60px;
        margin-right: 20px;
      }
      .menu-item {
        cursor: pointer;
        span {
          display: inline-block;
          margin: 0 20px;
          color: #fff;
          &:hover {
            transition: 0.7s;
            transform: scale(1.2, 1.2);
          }
        }
      }
    }
  }

  .el-main {
    // background-color: #e9eef3;
    padding: 60px 20px 0 20px;
    min-height: 100vh;
  }
}
</style>
