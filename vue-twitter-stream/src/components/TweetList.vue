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
</style>
