<template>
  <div class="content">
    <div class="flex-one">
      <span>方块一</span>
      <span>方块二</span>
      <span>方块333</span>
    </div>
    yuansu
    <div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.content {
  .flex-one {
    width: 300px;
    height: 200px;
    border: 1px solid;
    display: flex;
    span {
      width: 50px;
      height: 50px;
      border: 1px solid;
    }
  }

  .box {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: move2 3s 2s;
  }
  @keyframes move1 {
    from {
      left: 0px;
    }
    to {
      left: 200px;
    }
  }
  @keyframes move2 {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(200px);
    }
  }
}
</style>
