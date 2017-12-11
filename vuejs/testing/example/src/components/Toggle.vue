<template>
  <div class="toggle">
    <h3>Toggle</h3>
    <button v-on:click="toggle">Toggle Message</button>
    <p class="message" v-if="show">Hello from Toggle.vue!</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
  .toggle {
    margin-top: 30px;
  }
</style>
