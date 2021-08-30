<template>
  <div class="main-container" v-if="currentMenu.menuId">
    <div v-if="currentMenu.menuId == 'css_unfold'">
      <unfoldVue></unfoldVue>
    </div>
    <div v-if="currentMenu.menuId == 'css_element_center'">
      <elementCenter></elementCenter>
    </div>
    <div v-if="currentMenu.menuId == 'css_transtion'">
      <transtion></transtion>
    </div>
    <div v-if="currentMenu.menuId == 'css_animation'">
      <animation></animation>
    </div>
    <div v-if="currentMenu.menuId == 'css_transform'">
      <elementCenter></elementCenter>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import unfoldVue from "./list-pages/unfold.vue";
import elementCenter from "./list-pages/elementCenter.vue";
import transtion from "./list-pages/transtion.vue";
import animation from "./list-pages/animation.vue";

export default {
  name: "Main",
  components: { unfoldVue, elementCenter, transtion, animation },
  data() {
    return {
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  mounted() {
    eventBus.$on("menuNew", (data) => {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main-container {
  padding: 50px 150px;
}
</style>
