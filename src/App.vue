<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body {
    width:100%;
    height: 100%;
    margin:0;
    padding:0;
  }
  ul,li{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
#app {
  width:100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
