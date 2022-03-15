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
      <transform></transform>
    </div>
    <div v-if="currentMenu.menuId == 'css_vertical_align'">
      <verticalAlign></verticalAlign>
    </div>
    <div v-if="currentMenu.menuId == 'css_flex'">
      <flex></flex>
    </div>
    <div v-if="currentMenu.menuId == 'css_sticky'">
      <sticky></sticky>
    </div>
    <div v-if="currentMenu.menuId == 'css_bfc'">
      <bfc></bfc>
    </div>

    <!-- 特效区 -->
    <div v-if="currentMenu.menuId == 'css_see_1'">
      <see1></see1>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import unfoldVue from "./list-pages/unfold.vue";
import elementCenter from "./list-pages/elementCenter.vue";
import transtion from "./list-pages/transtion.vue";
import animation from "./list-pages/animation.vue";
import transform from "./list-pages/transform.vue";
import verticalAlign from "./list-pages/vertical-align.vue";
import flex from "./list-pages/flex.vue";
import sticky from "./list-pages/sticky.vue";
import bfc from "./list-pages/bfc.vue";
import see1 from "./list-pages/see_1.vue";

export default {
  name: "Main",
  components: {
    unfoldVue,
    elementCenter,
    transtion,
    animation,
    transform,
    verticalAlign,
    flex,
    sticky,
    bfc,
    see1,
  },
  data() {
    return {
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  mounted() {
    eventBus.$on("cssMenuEmit", (data) => {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
