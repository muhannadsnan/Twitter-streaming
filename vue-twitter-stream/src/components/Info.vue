<template>
  <div class="Info">

    <h4 v-if="isConnected" class="text-center mt-0 mb-3">Conntected to Twitter Stream !</h4>
    <h4 v-if="!isConnected" class="text-danger text-center mt-0 mb-3">Disconnected !</h4> 

    <div class="text-center" v-if="isConnected && listLength == 0">
      <p v-if="isConnected" class="text-secondary text-center">Waiting for tweets...</p>
      <div class="spinner-border text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div> 
    
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['isConnected', 'listLength'],
  data(){
    return {
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
h4 { margin: 40px 0 0; color: #42b983;}
ul { list-style-type: none; padding: 0;}
li { display: inline-block; margin: 0 10px;}
a { color: #42b983;}
</style>
