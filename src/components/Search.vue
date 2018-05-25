<template>
  <div class="search">
  <h1> Welcome to the NASA API </h1>
  <h2> What would you like to see? </h2>
    <form v-on:submit.prevent="getResult(query)">
    <input type="text" placeholder="Type in your search query" v-model="query"> </input>
    </form>
  <div v-if="results && results.length > 0" class="results">
    <div v-for="result in results">
      <img v-bind:src="result.links[0].href">
    </div>
  </div>

    <div v-else-if="results && results.length === 0" class="no-results">
      <h2>No Words Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  },
  methods: {
    getResult(query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        console.log(response.data.collection.items);
        this.results = response.data.collection.items;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.results img{
  height: 300px;
  margin: 15px;
}
</style>
