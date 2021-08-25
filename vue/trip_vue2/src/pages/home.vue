<template>
  <div class="root-container">
    <div
      class="menu-item"
      v-for="(item, i) in menuList"
      :key="i"
      @click="menuClick(item)"
    >
      <span>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      menuList: [
        { name: "图片集合", path: "/pic" },
        { name: "css-效果模块", path: "/css-module" },
      ],
    };
  },
  mounted() {
    // this.$dri.highlight({
    //   element: ".menu-item",
    //   popover: {
    //     title: "点击卡片",
    //     description: "进入详情",
    //   },
    // });
  },
  methods: {
    menuClick(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="less" scope>
.root-container {
  display: flex;
  width: 100%;
  padding: 30px;
  .menu-item {
    width: 220px;
    height: 135px;
    border: 1px solid;
    margin: 0 20px 20px 0;
    cursor: pointer;
    &:hover {
      background: rgb(138, 137, 141);
    }
    span {
      line-height: 135px;
    }
  }
}
</style>
