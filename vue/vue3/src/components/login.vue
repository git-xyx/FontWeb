<template>
  <p>index</p>
  <button @click="toHome">toHome</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "login",
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push({
        path: "home",
      });
    };
    return {
      toHome,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
