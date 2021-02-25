<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="wrapper">
    <div style="background: red"></div>
    <div style="background: green"></div>
    <div style="background: blue"></div>
    <div style="background: black"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrapper {
  display: flex;
  width: 1000px;
  border: 1px solid;

  div {
    flex-basis: 100px;
    height: 200px;
  }
}
</style>
