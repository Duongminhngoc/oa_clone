<template>
  <div id="app">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from './components/sidebar/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
