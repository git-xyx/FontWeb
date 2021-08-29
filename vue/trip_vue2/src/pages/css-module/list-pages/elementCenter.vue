<!-- chrome里超长省略 展开收起 -->
<template>
  <div>
    <!-- 水平居中 -->
    <div class="content1">
      <div class="com-func func-1">
        <span class="child"> 水平居中测试元素</span>
      </div>
      <div class="com-func func-2">
        <div class="child">水平居中</div>
      </div>
      <div class="com-func func-3">
        <div class="child">水平居中测试元素</div>
      </div>
    </div>
    <!-- 垂直居中 -->
    <div class="content2">
      <div class="com-func func-1">
        <span class="child"> 垂直居中</span>
      </div>
      <div class="com-func func-2">
        <div class="child">垂直居中</div>
      </div>
      <div class="com-func func-3">
        <div class="child">垂直居中测试元素</div>
      </div>
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
.com-func {
  margin-bottom: 20px;
}
.content1 {
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
      // position: absolute;
      // left: 0;
      // right: 0;
      // margin: 0 auto;
    }
  }
  .func-3 {
    height: 100px;
    position: relative;
    background-color: aqua;
    text-align: center;
    .child {
      background-color: blueviolet;
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
.content2 {
  .func-1 {
    height: 100px;
    background-color: aqua;
    text-align: center; /* 水平居中 */
    .child {
      color: #fff;
      background-color: blueviolet;
      line-height: 100px;
    }
  }

  .func-2 {
    display: table;
    height: 100px;
    background-color: aqua;
    text-align: center; /* 水平居中 */
    .child {
      display: table-cell;
      vertical-align: middle;
      color: #fff;
      background-color: blueviolet;
    }
  }
}
</style>
