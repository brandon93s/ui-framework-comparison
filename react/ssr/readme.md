# Server Side Rendering

### Examples

Examples can be run with the following unless otherwise noted:

```
npm install
npm start
```

#### basic

This example shows a very basic functional react component rendered to an html string on the server. The output is logged directly to the console.

#### server-basic

This example extends upon basic by exposing the SSR output via an express web server. Navigating to `localhost:8080` will return a response with your current path displayed in the html. Try navigating to different paths to see the output update.


#### server-template-file

:tada: [Live Demo](https://server-template-file-vvjxdqrevr.now.sh/)

This example extends upon server-basic by extracting the html content into a separate `index.template.html` file. In this example, the `title` of the page dynamically reflects the time of page load.

#### next.js

:tada: [Live Demo](https://nextjs-ijovzkrovm.now.sh/)

This example builds a universal react app using [next.js](https://github.com/zeit/next.js) and is based on the tutorial at [learnnextjs.com](https://learnnextjs.com/). In this example, every page can be rendered by both the client and the server. Navigating directly to a page in your browser will result in a server render, while navigating via links will result in a client side render. Likewise, the data to populate the pages is fetched from the browser for a client render or from the node.js server for a server render. Note the on-screen message _"This page was rendered on..."_ which provides context of now the current page was rendered.

To run this example:

```
npm install
npm run dev
```
