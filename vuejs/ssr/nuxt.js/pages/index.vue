<template>
  <section>
    <h1>Batman TV Shows</h1>
    <ul>
      <li v-for="item in items" :key="item.show.id">
        <nuxt-link :to="'/post/' + item.show.id"> {{ item.show.name }} </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import fetch from 'isomorphic-unfetch'

export default {
  async asyncData ({store, isServer}) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    // Save isServer for demo purposes
    store.commit('rendered', isServer)

    return {
      items: data,
      isServer
    }
  }
}
</script>
