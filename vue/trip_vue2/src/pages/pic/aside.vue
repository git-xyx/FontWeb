<template>
  <div class="aside-container">
    <div
      class="menu-item"
      :class="{ choosed: currentMenu.menuId == item.menuId }"
      v-for="(item, index) in menuList"
      :key="index"
      @click="handleNodeClick(item)"
    >
      {{ item.menuNm }}
    </div>
    <div @click="getMenuList()">get+</div>
  </div>
</template>

<script>
import { commonJs } from "../../const/index";
import eventBus from "../../utils/eventBus";

export default {
  name: "Aside",
  data() {
    return {
      menuList: [],
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  created: function () {
    this.getMenuList();
  },
  methods: {
    // 获取菜单内容
    getMenuList() {
      this.$post(`${commonJs.URL}/menu/query`, { type: "pic" }).then((res) => {
        if (res.length) {
          this.menuList = res;
          res.length && this.handleNodeClick(res[0]);
        }
      });
    },
    // 点击菜单展开
    handleNodeClick(data) {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
      eventBus.$emit("picMenuEmit", data);
    },
  },
};
</script>

<style lang="less" scoped>
.aside-container {
  width: 176px;
  padding: 12px;
  text-align: left;

  .menu-item {
    cursor: pointer;
    &:hover,
    &.choosed {
      background: #d9dfe8;
    }
  }
}
</style>
