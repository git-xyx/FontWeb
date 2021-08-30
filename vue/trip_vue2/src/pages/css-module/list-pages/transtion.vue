<template>
  <div class="content">
    <h2>鼠标移入方块</h2>
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
  div {
    width: 100px;
    height: 100px;
    margin: auto;
    background: blue;
    transition: 5s;
    transition-delay: 1s;
    transition-timing-function: linear; // 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      background: rgb(236, 10, 10);
      width: 300px;
    }
  }
}
</style>
