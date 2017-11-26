import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
const server = express()

const HelloURL = (props) => <div>The visited URL is: {props.url}</div>

server.get('*', (req, res) => {
    const html = ReactDOMServer.renderToString(<HelloURL {...req}/>)

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
        </html>
    `)
})

server.listen(8080, () => {
    console.log(`
    SSR server listening at localhost:8080

    Visit any path on localhost:8080 for a dynamic SSR example.
    `)
})