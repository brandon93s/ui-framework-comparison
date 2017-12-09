<template>
  <section>
    <h1>{{ name }}</h1>
    <p>{{ summary }}</p>
    <img :src="imgSrc" />
  </section>
</template>

<script>
import fetch from 'isomorphic-unfetch'

export default {
  async asyncData ({store, params, isServer}) {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    // Save isServer for demo purposes
    store.commit('rendered', isServer)

    return {
      name: show.name,
      summary: show.summary.replace(/<[/]?p>/g, ''),
      imgSrc: show.image ? show.image.medium : ''
    }
  }
}
</script>
