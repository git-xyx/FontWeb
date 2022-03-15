<template>
  <div class="content">
    <h2>see1</h2>
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
  background-color: #000;
  div {
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
}
</style>
