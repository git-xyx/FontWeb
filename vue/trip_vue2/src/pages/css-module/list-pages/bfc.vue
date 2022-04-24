<template>
  <div class="content">
    <div class="ulol">
      <ul type="circle">
        <li>afew</li>
        <li>afew</li>
        <li>afew</li>
        <li>afew</li>
      </ul>

      <ol type="1">
        <span>asdg</span>
        <span>asdg</span>
        <span>asdg</span>
        <li>afew</li>
        <li>afew</li>
        <li>afew</li>
        <li>afew</li>
      </ol>
    </div>
    <!--bfc1 -->
    <div class="bbffcc1">
      <p>看看我的 margin是多少</p>
      <div>
        <p>看看我的 margin是多少</p>
      </div>
    </div>
    <!--  -->
    <div class="bbffcc2">
      <div class="left">LEFT</div>
      <div class="right">RIGHT</div>
    </div>

    <!--  -->
    <div class="bbffcc3">
      <div class="child"></div>
      <div class="child"></div>
    </div>

    <!--  -->
    <div class="first">123</div>
    <div class="second">456</div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.content {
  .ulol {
    ul {
      li::marker {
        content: "😅";
      }
      li::before {
        content: "▍";
      }
    }
    //
    ol {
      span {
        display: list-item;
      }
    }
  }

  .bbffcc1 {
    div {
      overflow: hidden;
    }
    p {
      color: #f55;
      background: rgb(221, 221, 218);
      width: 200px;
      line-height: 100px;
      text-align: center;
      margin: 30px;
    }
  }

  .bbffcc2 {
    .left {
      width: 100px;
      height: 150px;
      float: left;
      background: rgb(245, 247, 243);
      text-align: center;
      line-height: 150px;
      font-size: 20px;
    }

    .right {
      overflow: hidden;
      height: 300px;
      background: rgb(161, 155, 165);
      text-align: center;
      line-height: 300px;
      font-size: 40px;
      margin-left: 25px;
    }
  }

  .bbffcc3 {
    border: 5px solid rgb(91, 243, 30);
    width: 300px;
    overflow: hidden;
    .child {
      border: 5px solid rgb(233, 250, 84);
      width: 100px;
      height: 100px;
      float: left;
    }
  }

  .first {
    width: 200px;
    height: 200px;
    border: 3px solid red;
    // float: left;
  }
  .second {
    width: 200px;
    height: 100px;
    border: 3px solid blue;
  }
}
</style>
