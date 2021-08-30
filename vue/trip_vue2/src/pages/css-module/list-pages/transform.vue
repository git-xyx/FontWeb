<template>
  <div class="content">
    <div class="div1"></div>
    <div class="div2"></div>
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
  .div1 {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
    border: 1px dotted red;
  }
  .div2 {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
    background: blue;

    transform: rotate3d(0, 0, 0, 30deg) translate(10px, 10px);
  }
}
</style>
