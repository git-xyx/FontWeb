<template>
  <div class="aside-container">
    <div
      class="menu-item"
      :class="{ choosed: currentMenu.menuId == item.menuId }"
      v-for="item in cssList"
      :key="item.id"
      @click="handleNodeClick(item)"
    >
      {{ item.menuNm }}
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import { CSS_MENUS } from "../../const/css-const";

export default {
  name: "Aside",
  data() {
    return {
      cssList: [],
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  created: function () {
    this.cssList = CSS_MENUS;
  },
  mounted: function () {
    if (this.cssList[0]) {
      setTimeout(() => {
        this.handleNodeClick(this.cssList[0]);
      }, 0);
    }
  },
  methods: {
    // 点击菜单展开
    handleNodeClick(data) {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
      eventBus.$emit("menuNew", data);
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
