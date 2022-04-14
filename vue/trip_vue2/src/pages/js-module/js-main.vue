<template>
  <div class="main-container" v-if="currentMenu.menuId">
    <div v-if="currentMenu.menuId == 'js_debounce'">
      <debounce></debounce>
    </div>
    <div v-if="currentMenu.menuId == 'js_promise'">
      <promise></promise>
    </div>
    <div v-if="currentMenu.menuId == 'js_drag'">
      <drag></drag>
    </div>
    <div v-if="currentMenu.menuId == 'js_highquery'">
      <highquery></highquery>
    </div>
    <div v-if="currentMenu.menuId == 'js_wbsocket'">
      <wbsocket></wbsocket>
    </div>
    <div v-if="currentMenu.menuId == 'js_bigupload'">
      <bigupload></bigupload>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
import debounce from "./list-pages/debounce.vue";
import promise from "./list-pages/promise.vue";
import drag from "./list-pages/draggable.vue";
import highquery from "./list-pages/highquery.vue";
import wbsocket from "./list-pages/wbsocket.vue";
import bigupload from "./list-pages/bigupload.vue";
highquery;
export default {
  name: "Main",
  components: { debounce, promise, drag, highquery, wbsocket, bigupload },
  data() {
    return {
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
    };
  },
  mounted() {
    eventBus.$on("jsMenuEmit", (data) => {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
