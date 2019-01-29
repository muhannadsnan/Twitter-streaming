<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Tweet/>
  </div>
</template>

<script>
import Tweet from './Tweet.vue'

export default {
  name: 'TweetList',
  components: {
    Tweet
  },
  props: [],
  data(){
    return {
      msg: '',
    }
  },
  mounted(){
    this.msg = 'this is TweetList'
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
