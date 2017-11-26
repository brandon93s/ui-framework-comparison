// https://server-template-file-vvjxdqrevr.now.sh/

import {readFileSync} from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
const server = express()
const template = readFileSync('./index.template.html', 'utf-8')

const HelloURL = (props) => <div>The visited URL is: {props.url}</div>

server.get('*', (req, res) => {
    const html = ReactDOMServer.renderToString(<HelloURL {...req}/>)

    let page = template.replace(/<!--react-ssr-title-->/, new Date().toLocaleTimeString());
    page = page.replace(/<!--react-ssr-outlet-->/, html)

    res.end(page)
})

server.listen(8080, () => {
    console.log(`
    SSR server listening at localhost:8080

    Visit any path on localhost:8080 for a dynamic SSR example.
    `)
})