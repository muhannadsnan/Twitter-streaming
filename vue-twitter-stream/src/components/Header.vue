<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [],
  data(){
    return {
      msg: '',
    }
  },
  mounted(){
    this.msg = 'this is header'
  }
}
</script>

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
img {
  width: 150px
}
</style>
