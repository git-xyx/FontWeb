<template>
  <div class="aside-container">
    <div
      class="menu-item"
      v-bind:class="{ choosed: currentMenu.menuId == item.menuId }"
      v-for="item in jsList"
      v-bind:key="item.id"
      @click="handleNodeClick(item)"
    >
      {{ item.menuNm }}
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import { JS_MENUS } from "../../const/js-const";

export default {
  name: "Aside",
  data() {
    return {
      jsList: [],
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  created: function () {
    this.jsList = JS_MENUS;
  },
  mounted: function () {
    if (this.jsList[0]) {
      setTimeout(() => {
        this.handleNodeClick(this.jsList[0]);
      }, 0);
    }
  },
  methods: {
    // 点击菜单展开
    handleNodeClick(data) {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
      eventBus.$emit("jsMenuEmit", data);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
