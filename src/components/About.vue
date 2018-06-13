<template>
  <div class="about">
  <h1> About Page </h1>
    <p>
    The NASA API is here to supply you with all the images you love about space and time! This page pulls in the API data from the NASA website and allows search results to be generated right onto the page.
    </p>
    <p>
    Check out the <router-link to="/">search page</router-link>
  <router-view></router-view>to type in your favorite space query to see your results generate!
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
  width:50%;
  margin: 0 auto;
  padding-bottom:30px;
  text-shadow: 
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000; 
    

}

p a {
text-decoration: underline;
color: white;
  width:50%;
  margin: 0 auto;
  padding-bottom:30px;
  text-shadow: 
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    }

p a:hover {
  color:blue;
}



</style>
