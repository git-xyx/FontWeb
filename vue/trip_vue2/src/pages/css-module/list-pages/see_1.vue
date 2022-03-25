<template>
  <div class="content">
    <h2>see1</h2>
    <div class="moon"></div>

    <!-- requestAnimationFrame  -->
    <div style="position: relative">
      <div id="e"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var e = document.getElementById("e");
    var flag = true;
    var left = 0;

    function selfRender() {
      if (flag == true) {
        if (left >= 100) {
          flag = false;
        }
        e.style.left = ` ${left++}px`;
      } else {
        if (left <= 0) {
          flag = true;
        }
        e.style.left = ` ${left--}px`;
      }
    }
    // setInterval(function () {
    //   selfRender();
    // }, 1000 / 60);
    (function animloop(time) {
      console.log(time, performance.now());
      selfRender();
      let rafId = requestAnimationFrame(animloop);
      //如果left等于50 停止动画
      if (left == 50) {
        cancelAnimationFrame(rafId);
      }
    })();
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #000;
  .moon {
    --colorA: #fff;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border-top: 5px solid #fff;
    transform: rotate(-15deg);
    filter: drop-shadow(0 0 2px var(--colorA))
      drop-shadow(0 0 5px var(--colorA)) drop-shadow(0 0 10px var(--colorA))
      drop-shadow(0 0 20px var(--colorA));
  }

  #e {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    zoom: 1;
  }
}
</style>
