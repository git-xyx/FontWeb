<template>
  <div class="content">
    <div></div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.content {
  position: relative;
  div {
    width: 100px;
    height: 100px;
    margin: auto;
    background: rgb(153, 211, 18);

    position: absolute;
    animation: mymove 3s infinite;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.25, 0.82, 0.165, 1);
  }

  @keyframes mymove {
    from {
      // background: aqua;
      left: 0px;
    }
    to {
      // background:rgb(187, 103, 8);
      left: 200px;
    }
  }
}
</style>
