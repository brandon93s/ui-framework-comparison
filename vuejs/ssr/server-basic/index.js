const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app).then(html => {
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
        </html>
    `)
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