<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>


<script>
export default {
    created(){
    this.$store.dispatch({
      type:'loadToys'
    }),
    this.$store.dispatch({
      type:'loadUsers'
    }),
    this.$store.dispatch({
			type: "loadReviews",
			
		});
  }
}
</script>

<style>

</style>
<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
/*nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
