// new Date().toLocaleTimeString()

const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const context = () => {
    return {
        title: new Date().toLocaleTimeString()
    }
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app, context()).then(html => {
    res.end(html)
  }).catch(err => {
    res.status(500).end('Internal Server Error')
  });
})

server.listen(8080, () => {
    console.log(`
    SSR server listening at localhost:8080

    Visit any path on localhost:8080 for a dynamic SSR example.
    `)
})