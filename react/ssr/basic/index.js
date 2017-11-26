// Step 1: Create a react component
const Hello = (props) => <div>{props.greeting}</div>

// Step 2: Import renderer
import React from 'react'
import ReactDOMServer from 'react-dom/server'

// Step 3: Render the component to HTML
const html = ReactDOMServer.renderToString(<Hello greeting="Hello World" />)
console.log(html)
