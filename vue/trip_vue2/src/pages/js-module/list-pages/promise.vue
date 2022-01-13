<template>
  <div class="content">
    <el-button class="bt1" type="primary" @click="begin()">开始回调</el-button>
  </div>
</template>

<script>
export default {
  name: "promise",
  data() {
    return {
      clickDate1: null,
    };
  },
  mounted() {
    
    this.pro();
  },

  methods: {
    begin() {
      // new Promise((resolve, reject) => {
      //   //做一些异步操作
      //   setTimeout(function () {
      //     var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
      //     if (num <= 5) {
      //       resolve(num);
      //     } else {
      //       reject("数字太大了");
      //     }
      //   }, 2000);
      // }).then(
      //   (data) => {
      //     console.log("resolved", data);
      //   },
      //   (err) => {
      //     console.log("rejected", err);
      //   }
      // );
      //请求某个图片资源
      function requestImg() {
        var p = new Promise((resolve, reject) => {
          var img = new Image();
          img.onload = function () {
            resolve(img);
          };
          img.src = "图片的路径";
        });
        return p;
      }
      //延时函数，用于给请求计时
      function timeout() {
        var p = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("图片请求超时");
          }, 5000);
        });
        return p;
      }
      Promise.race([requestImg(), timeout()])
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    // 
    async pro() {
      let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(666);
        }, 3000);
      });
      console.log(result);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
}
</style>
