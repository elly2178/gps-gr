<template>
  <Navbar />
  <router-view/>
 </template>
 
 <script> 
 import Navbar from './components/Navbar.vue';
 import FilterNav from './components/FilterNav.vue';
 
 export default{
   components: { Navbar , FilterNav}
 }
 </script>

<style>
body{
  background-color: #242525;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #abd2f8;
}

 
</style>
