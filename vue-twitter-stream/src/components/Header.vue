<template> 
  <nav class="navbar navbar-dark bg-dark mb-3">
    <img class="navbar-brand" alt="Vue logo" src="../assets/logo.png">
    <h3 class="mx-auto my-auto text-info float-left">{{title}}</h3>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
  data(){
    return {
    }
  },
  mounted(){
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
  width: 50px
}
</style>
