<template>
  <div id="app">
    <Header/>
    <TweetList/>
    <h3 v-if="isConnected" class="isConnected">Conntected to Twitter Stream !</h3>
    <h3 v-if="!isConnected" class="isDisconnected">Disconnected !</h3>
    <div class="card border-info mb-3 text-secondary px-2 py-2" v-for="tweet in tweets">
      <h4 class="username">{{tweet.user.name}}:</h4>
      {{tweet.text}}  
      <p class="date text-right pt-2">{{tweet.created_at}}</p>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TweetList from './components/TweetList.vue'
import io from 'socket.io-client';

export default {
  name: 'app',
  components: {
    Header,
    TweetList
  },
  data(){
    return {
      tweets: [],
      isConnected: false
    }
  },
  mounted(){
    // this.msg = 'this is App'
    const socket = io('http://localhost:3000')
    // socket.on('connect', function(){})
    socket.on('connect', () => this.isConnected = true)
    // socket.on('event', function(data){})
    socket.on('tweeted', (data) => this.tweets.push(data))
    // socket.on('tweeted', (data) => console.log('data', data))
    // socket.on('disconnect', function(){})
    socket.on('disconnect', () => this.isConnected = false)
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.isConnected{color: #42b983}
.isDisconnected{color: darkred}
.username{font-size: 16px; color: #aaa; text-align: left;}
.date{font-size: 10px; color: #777; margin-left: 20px; text-align: right;} */
</style>
