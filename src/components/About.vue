<template>
  <div class="about">
  <h1> About Page </h1>
 <p>
 
    </p>
    <p>
    The NASA API is here to supply you with all the images you love about space and time! This page pulls in the API data from the NASA website and allows search results to be generated right onto the page.
    </p>
    <p>
    Check out the  <router-link to="/">search</router-link>
  <router-view></router-view>  page to type in your favorite space query to see your results generate!
    </p>
    

</div>
</template>

<style scoped>
h1 {
  color: black;
  text-shadow: 2px 2px white;
}

p {
  color: white;
}

</style>
