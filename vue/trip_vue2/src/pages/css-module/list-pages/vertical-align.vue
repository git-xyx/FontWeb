<template>
  <div class="content">
    <div style="background: green">
      x
      <img src="../assets/vertical.png" />
      <span style="display: inline-block">vertical</span>
      <span style="display: inline-block; overflow: hidden; height: 50px"
        >123</span
      >
    </div>

    <div style="background: #398dee; padding-top: 20px">
      <span style="font-size: 30px">x</span>
      <img src="../assets/vertical.png" style="margin-top: 30px" />
      <span style="color: red; vertical-align: top">top</span>
    </div>

    <div style="background: #de460c; padding-top: 20px">
      <span style="background-color: red">text-top</span>
      <img src="../assets/vertical.png" style="vertical-align: text-top" />
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
}
</style>
