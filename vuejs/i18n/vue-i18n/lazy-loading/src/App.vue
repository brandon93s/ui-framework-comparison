<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>
      This page lazy-loads translations from a remote translation service.
    </p>
    <p>
      Select a language below and watch your network activity while the greeting updates.
    </p>
    <br />

    <select v-model="locale">
      <option disabled value="">Please select one</option>
      <option>de</option>
      <option>el</option>
      <option>en</option>
      <option>es</option>
      <option>fr</option>
      <option>it</option>
      <option>ja</option>
      <option>ko</option>
      <option>nl</option>
      <option>pt</option>
      <option>ru</option>
      <option>zh</option>
    </select>
    
    <span>Selected: {{ locale }}</span>

    <h3> Greeting: "{{ $t('greetings.helloWorld') }}"</h3>
  </div>
</template>

<script>
import * as i18n from './setup/i18n-setup'

export default {
  name: 'app',
  data () {
    return {
      msg: 'lazy-load',
      locale: 'en'
    }
  },
  watch: {
    locale: (val) => {
      i18n.loadLanguageAsync(val)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
