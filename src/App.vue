<template>
  <div id="app">
    <b-container>
      <dataManager></dataManager>
    </b-container> 
  </div>
</template>

<script>

import dataManager from './components/DataManager'

export default {
  name: 'app',
  components: {
    dataManager
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
