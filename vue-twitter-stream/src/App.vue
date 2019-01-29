<template>
  <div id="app">
    <Header title="Welcome to Twitter Stream"/>
    <div class="row">
      <div class="container">
        <Info :isConnected="isConnected" :listLength="tweetList.length"/>                
        <TweetList :list="tweetList"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Info from './components/Info.vue'
import TweetList from './components/TweetList.vue'
import io from 'socket.io-client';

export default {
  name: 'app',
  components: {
    Header,
    TweetList, 
    Info
  },
  data(){
    return {
      tweetList: [],
      isConnected: false
    }
  },
  mounted(){ 
    const socket = io('http://localhost:3000') 
    socket.on('connect', () => this.isConnected = true) 
    socket.on('tweeted', (data) => this.tweetList.unshift(data)) 
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
