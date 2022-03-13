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

    // flex容器属性
    // flex-direction: row column row-reverse column-reverse;
    // flex-wrap: nowrap wrap wrap-reverse;
    // flex-flow: row nowrap; // 上面两种组合
    // justify-content: flex-start flex-end center space-between space-around; // 主轴上对齐方式
    // align-items: flex-start flex-end center baseline stretch; // 交叉轴对齐方式
    // align-content: flex-start flex-end center space-between space-around stretch; // 多根轴线对齐方式

    span {
      width: 50px;
      height: 50px;
      border: 1px solid;

      // flex内部元素属性
      // order: <integer>;数值越小，排列越靠前，默认为0。
      // flex-grow: <number>;放大比例，默认为0，即如果存在剩余空间，也不放大。
      // flex-shrink: <number>;缩小比例，默认为1，即如果空间不足，该项目将缩小。
      // flex-basis:  <length> | auto; /* default auto */; 默认值为auto，即项目的本来大小。
      // flex: ; //flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto 。 简写 auto (1 1 auto) 和 none (0 0 auto)。

      // align-self: auto flex-start flex-end center baseline stretch; //单个项目有与其他项目不一样的对齐方式，
      // 可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
      // 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
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
