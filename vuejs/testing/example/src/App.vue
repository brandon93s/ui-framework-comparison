<template>
  <div id="app">
    <h1>Testing Demos</h1>
    <img width="200" src="./assets/logo.png">
    <Counter />
    <Toggle />
  </div>
</template>

<script>
import Counter from './components/Counter'
import Toggle from './components/Toggle'

export default {
  name: 'app',
  components: {
    Counter,
    Toggle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
