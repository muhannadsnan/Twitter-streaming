<template>
  <div id="app">

    <Header title="Welcome to Twitter Stream"/>

    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 mx-auto"> 

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
      isConnected: false,
      socket: io('http://localhost:3000') 
    }
  },
  methods: {
    socketEstablish(){
      this.socket.on('connect', () => this.isConnected = true) 
      this.socket.on('tweeted', (data) => this.tweetList.unshift(data)) 
      this.socket.on('disconnect', () => this.isConnected = false)
    }
  },
  mounted(){ 
    this.socketEstablish()
  }
}
</script>

<style>
</style>
