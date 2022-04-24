<template>
  <div class="content">
    <el-button type="primary" @click="setTimeoutPage()"
      >setTimeout分页渲染</el-button
    >
    <el-button type="primary" @click="setTimeoutQuery()"
      >setTimeout一次性渲染</el-button
    >

    <el-button type="primary" @click="requestAnimationFramePage()"
      >requestAnimationFrame</el-button
    >

    <div v-for="item in qlist" v-bind:key="item.id">
      <img :src="item.src" />
      {{ item.text }}
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
import { commonJs } from "../../../const/index";
export default {
  name: "highquery",
  data() {
    return {
      qlist: [],
    };
  },
  mounted() {},

  methods: {
    setTimeoutPage() {
      // setTimeout分页渲染: 把10w按照每页数量limit分成总共Math.ceil(total / limit)页，
      // 然后利用setTimeout，每次渲染1页数据，这样的话，渲染出首页数据的时间大大缩减了
      this.$post(`${commonJs.URL}/jsModule/highquery/query`).then((res) => {
        if (res.length) {
          const total = res.length;
          const page = 0;
          const limit = 200;
          const totalPage = Math.ceil(total / limit);

          const selfRender = (page) => {
            if (page >= totalPage) return;
            setTimeout(() => {
              for (let i = page * limit; i < page * limit + limit; i++) {
                const item = res[i];
                this.qlist.push(item);
              }
              selfRender(page + 1);
            }, 0);
          };
          selfRender(page);
        }
      });
    },

    async setTimeoutQuery() {
      let container = document.getElementById("container");

      const list = await this.$post(`${commonJs.URL}/jsModule/highquery/query`);
      console.log(list);
      const total = list.length;
      const page = 0;
      const limit = 200;
      const totalPage = Math.ceil(total / limit);

      const selfRender = (page) => {
        if (page >= totalPage) return;
        setTimeout(() => {
          for (let i = page * limit; i < page * limit + limit; i++) {
            const item = list[i];
            const div = document.createElement("div");
            div.className = "sunshine";
            div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`;
            container.appendChild(div);
          }
          selfRender(page + 1);
        }, 0);
      };
      selfRender(page);
    },

    requestAnimationFramePage() {
      this.$post(`${commonJs.URL}/jsModule/highquery/query`).then((res) => {
        if (res.length) {
          const total = res.length;
          const page = 0;
          const limit = 200;
          const totalPage = Math.ceil(total / limit);

          const selfRender = (page) => {
            if (page >= totalPage) return;
            // 使用requestAnimationFrame代替setTimeout
            requestAnimationFrame(() => {
              for (let i = page * limit; i < page * limit + limit; i++) {
                const item = res[i];
                this.qlist.push(item);
              }
              selfRender(page + 1);
            });
          };
          selfRender(page);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  img {
    // width: 30px;
    // height: 30px;
  }
}
</style>
