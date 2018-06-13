<template>
  <div class="search">
  <h1> Welcome to the NASA API </h1>
  <p>
    
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </p>
  <h2> What would you like to see? </h2>
    <form v-on:submit.prevent="getResult(query)">
    <input type="text" placeholder="Type in your search query" v-model="query"> </input>
    </form>
  <div class="results-container">
  <spinner v-if="showSpinner"></spinner>

  <div v-if="results && results.length > 0" class="results">
    <div v-for="result in results">
      <img v-bind:src="result.links[0].href">
    </div>
  </div>

    <div v-else-if="results && results.length === 0" class="no-results">
      <h2>No Images Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>
    
</div>
</div>
</template>

<script>
import axios from 'axios';
require('vue2-animate/dist/vue2-animate.min.css');
import CubeSpinner from '@/components/CubeSpinner';

export default {
  name: 'Search',
  components: {
    spinner: CubeSpinner
  },
  data () {
    return {
      msg: 'Search',
      query: '',
      results: '',
      showSpinner: false
    }
  },
  methods: {
    getResult(query) {
      this.showSpinner = true;
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        console.log(response.data.collection.items);
        this.results = response.data.collection.items;
        this.showSpinner = false;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
  text-shadow: 2px 2px black;
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
  color: white;
}

.results img{
  height: 300px;
  margin: 15px;
}

p {
  color: white;
  text-shadow: 2px 2px black;
}

input {
  width:300px;
}
</style>
