<template>
  <div class="home-container">
    <div class="img-area">
      <div class="img-div" v-for="(item, index) in 20" :key="index">
        <img
          class="img-item"
          v-lazy="imgSrc + (index + 1) + '.jpeg'"
          alt="defalu.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { commonJs } from "../const/index";
export default {
  name: "home",
  data() {
    return {
      imgSrc: `${commonJs.URL}/images/home/`,
      imgList: [],
    };
  },

  mounted() {
    this.getAllImg();
  },

  methods: {
    getAllImg() {
      // this.$post(`${commonJs.URL}/home/img/all`).then((res) => {});
    },

    // IntersectionObserver
    // lazyLoad() {
    //   // 推荐使用IntersectionObserver
    //   let observer = new IntersectionObserver((entries, observe) => {
    //     entries.forEach((item) => {
    //       // 获取当前正在观察的元素
    //       let target = item.target;
    //       if (item.isIntersecting && target.dataset.src) {
    //         target.src = target.dataset.src;
    //         // 删除data-src属性
    //         target.removeAttribute("data-src");
    //         // 取消观察
    //         observe.unobserve(item.target);
    //       }
    //     });
    //   });
    //   let imgs = document.querySelectorAll(".img-item");
    //   imgs.forEach((item) => {
    //     // 遍历观察元素
    //     observer.observe(item);
    //   });
    // },
  },
};
</script>

<style lang="less" scope>
.home-container {
  // display: flex;
  // width: 100%;
  // padding: 30px;

  .img-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .img-div {
      width: 800px;
      height: 350px;
      margin: 30px;
      .img-item {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
