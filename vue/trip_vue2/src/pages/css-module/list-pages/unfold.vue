<!-- chrome里超长省略 展开收起 -->
<template>
  <div class="content">
    <input type="checkbox" id="exp" />
    <div class="text">
      <label class="btn" for="exp"></label>
      <span>
        但听得蹄声如雷，十余乘马疾风般卷上山来。马上乘客一色都是玄色薄毡大氅，
        里面玄色布衣，但见人似虎，马如龙，人既矫捷，马亦雄骏，每一匹马都是高头
        长腿，通体黑毛，奔到近处，群雄眼前一亮，金光闪闪，却见每匹马的蹄铁竟然
        是黄金打就。来者一共是一十九骑，人数虽不甚多，气势之壮，却似有如千军万
        马一般，前面一十八骑奔到近处，拉马向两旁一分，最后一骑从中驰出</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "unfold",
  mounted() {},
};
</script>

<style lang="less" scoped>
.content {
  display: flex;

  .text {
    width: 475px;
    border: aqua solid 1px;
    color: #333;
    font-size: 14px;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;

    &::before {
      content: "";
      float: right;
      height: 100%;
      margin-bottom: -20px;
    }
    .btn {
      color: dodgerblue;
      cursor: pointer;
      /* 控制环绕 */
      float: right;
      clear: both;
      margin-right: 8px;
    }
  }

  .btn::after {
    content: "展开";
  }
  #exp {
    visibility: hidden;
  }
  #exp:checked + .text .btn::after {
    content: "收起";
  }

  #exp:checked + .text {
    -webkit-line-clamp: 999; /*设置一个足够大的行数就可以了*/
  }
}
</style>
