<template>
  <div class="about">
  <h1> Welcome to the NASA About Page </h1>
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
