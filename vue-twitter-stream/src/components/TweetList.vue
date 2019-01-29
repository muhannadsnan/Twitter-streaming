<template>
  <div class="TweetList">    
      <Tweet v-for="tweet in list" :tweet="tweet" :key="tweet.id"/>
  </div>
</template>

<script>
import Tweet from './Tweet.vue'

export default {
  name: 'TweetList',
  components: {
    Tweet
  },
  props: ['list'],
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
