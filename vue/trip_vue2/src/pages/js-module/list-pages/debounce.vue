<template>
  <div class="content">
    <div class="deb">
      <div>
        防抖:
        触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
      </div>
      <el-button class="bt1" type="primary" @click="debFun()"
        >防抖点击</el-button
      >
      <label>{{ clickDate1 }}点击</label>
      <span>{{ clickTimes1 }}次</span>
    </div>
    <div class="thr">
      <div>
        节流:
        高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。
      </div>
      <el-button class="bt2" type="primary" @click="thrFun()"
        >节流点击</el-button
      >
      <label>{{ clickDate2 }}执行</label>
      <span>{{ clickTimes2 }}次</span>
    </div>
  </div>
</template>

<script>
import { comDebounce, comThrottle } from "./../../../utils/debounce.js";
export default {
  name: "debounce",
  data() {
    return {
      clickDate1: null,
      clickTimes1: (Number = 0),

      clickDate2: null,
      clickTimes2: (Number = 0),
    };
  },
  mounted() {},

  methods: {
    //点击触发函数  防抖
    debFun() {
      comDebounce(this.doDebEvent, 500)(new Date());
    },

    doDebEvent(randomTime) {
      this.clickDate1 = randomTime;
      this.clickTimes1++;
    },

    //点击触发函数  节流
    thrFun() {
      comThrottle(this.doThrEvent, 2500)(new Date());
    },

    doThrEvent(randomTime) {
      this.clickDate2 = randomTime;
      this.clickTimes2++;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .deb {
    margin-bottom: 50px;
  }
  .bt1 {
    margin-right: 20px;
  }
  .bt2 {
    margin-right: 20px;
  }
}
</style>
