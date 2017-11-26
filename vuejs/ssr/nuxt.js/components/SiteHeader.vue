<template>
  <section>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <span class="rendered-on" v-html="$store.getters.renderedMessage"></span>
  </section>
</template>

<style scoped>
a {
  margin-right: 15px;
}

.rendered-on {
  float: right;
  font-style: italic;
}
</style>
