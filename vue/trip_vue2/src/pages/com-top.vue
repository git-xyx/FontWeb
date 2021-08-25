<template>
  <div class="header">
    <div class="header-div">
      <span>---------Trav---------</span>
      <span class="back-btn">
        <router-link to="/home">返回</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-top",
};
</script>

<style lang="less" scoped>
// 固定头部栏
.header {
  height: 100%;
  background: linear-gradient(to right, #032e5b, #bdebfa);

  .header-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    span {
      font-size: 20px;
      color: green;
      &.back-btn {
        font-size: 14px;
        cursor: pointer;
        margin-right: 20px;
      }
    }
  }
}
</style>
