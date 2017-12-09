<template>
  <div class="default-layout">
    <SiteHeader />
    <nuxt/>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader'
export default {
  components: {
    SiteHeader
  }
}
</script>


<style>
.default-layout {
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
}

h1, a {
  font-family: "Arial";
}

ul {
  padding: 0;
}

li {
  list-style: none;
  margin: 5px 0;
}

a {
  text-decoration: none;
  color: blue;
}

a:hover {
  opacity: 0.6;
}
</style>
