<template>
  <div class="Tweet card mb-3 text-secondary px-3 pt-3 pb-0">
    <h5 class="username text-info">{{tweet.user.name}}:</h5>
    <p class="text-dark">{{tweet.text}}</p>
    <p class="date text-right pt-2"><small>{{tweet.created_at}}</small></p>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: ['tweet'],
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
</style>
