<template>
  <div class="Tweet card mb-3 text-secondary px-3 pt-3 pb-0">
    <h5 class="username text-info">{{tweet.user.name}}:</h5>
    <p class="text-dark">{{tweet.text}}</p>
    <p class="date text-right pt-2"><small>{{datetime}}</small></p>
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
  methods: {
    formatDate(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return date.getDate() + ". " + date.getMonth()+1 + " " + date.getFullYear() + "  " + strTime;
    },
  },
  computed: {
    datetime(){
      var date = new Date(this.tweet.created_at)
      return this.formatDate(date)
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
h3 { margin: 40px 0 0; }
ul { list-style-type: none; padding: 0;}
li { display: inline-block; margin: 0 10px;}
a { color: #42b983;} 
.Tweet {border-color: #b0c7de;}
</style>
