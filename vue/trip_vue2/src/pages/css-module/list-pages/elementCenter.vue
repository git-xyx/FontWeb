<!-- chrome里超长省略 展开收起 -->
<template>
  <div class="content">
    <div class="com-func func-1">
      <span class="child"> 测试元素</span>
    </div>
    <div class="com-func func-2">
      <div class="child"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "elementCenter",
  mounted() {},
};
</script>

<style lang="less" scoped>
.content {
  .com-func {
    margin-bottom: 20px;
  }
  .func-1 {
    background-color: aqua;
    text-align: center;
    .child {
      color: #fff;
      background-color: blueviolet;
    }
  }
  .func-2 {
    height: 100px;
    background-color: aqua;
    .child {
      position: relative;
      width: 100px;
      height: 100px;
      background-color: blueviolet;
      // 方式一：margin:0 auto
      // margin: auto;
      // 方式二：absolute + margin-left
      // position: absolute;
      // margin-left: -50px;
      // left: 50%;
      // 方式三：absolute + calc
      // position: absolute;
      // left: calc(50% - 50px);
      // 方式四：absolute + left + right + margin-left
      
    }
  }
}
</style>
