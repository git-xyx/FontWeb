<template>
  <div class="content">
    <div class="area">
      <p v-for="(item, index) in data" :key="index">段落{{ index }}</p>
      <div class="btns">
        <el-button size="small" type="primary">按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    for (let i = 0; i < 55; i++) {
      this.data.push(i);
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100vh;
  .area {
    width: 100%;
    min-height: 100%;
    position: relative;
    /* 子元素相对定位到底就会盖住父元素的底部的一部分内容。又因为盒模型默认是content-box，
    所以我们开启border-box盒模型，同时在加上一个底部的padding，这样的话，既会把内容挤上去
    同时底部的padding空间就可以留给底部的按钮用以放置。当然别忘了使用定位哦
    */
    box-sizing: border-box;
    padding-bottom: 40px;
    .btns {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #ced;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
