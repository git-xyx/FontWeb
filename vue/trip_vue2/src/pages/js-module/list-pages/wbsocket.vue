<template>
  <div>
    <div v-for="item in mesList" :key="item.key">{{ item.info }}</div>
  </div>
</template>

<script>
import { commonJs } from "../../../const/index";

export default {
  data() {
    return {
      mesList: [],
      times: 0,
    };
  },
  mounted: function () {
    let _self = this;
    this.$post(`${commonJs.URL}/jsModule/wbs`); // 请求服务器开启websocket

    var ws = new WebSocket("ws://localhost:4399");
    ws.onopen = function () {
      console.log("client: ws connection is open");
      _self.mesList.push({
        info: "与服务器连接建立",
      });
      ws.send("hello");
      _self.mesList.push({
        info: "给服务器发送消息：hello,server",
      });
    };
    ws.onmessage = function (e) {
      if (_self.times > 5) {
        _self.mesList.push({
          info: "就先这样啦，关闭连接，bye",
        });
        ws.close();
      }
      console.log("client: received:", e.data);
      _self.mesList.push({
        info: "服务器发来消息：" + e.data,
      });
      ws.send("收到你的" + e.data);
      _self.mesList.push({
        info: "给服务器发送消息：收到你的" + e.data,
      });
      _self.times++;
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>