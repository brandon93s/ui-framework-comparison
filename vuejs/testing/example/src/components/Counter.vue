<template>
  <div class="counter">
    <h3>Counter</h3>
    <button class="add" v-on:click="counter += 1">Add 1</button>
    <button class="remove" v-on:click="counter -= 1">Remove 1</button>
    <p>The current count is {{ counter }}.</p>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>
  .counter {
    margin-top: 30px;
  }
</style>
