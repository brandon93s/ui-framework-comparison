# Server Side Rendering

### Resources

- [Official Vuejs SSR Guide](https://ssr.vuejs.org/en/data.html)

### Examples

All examples can be run with:

```
npm install
npm start
```

#### basic

This example shows a very basic Vue instance rendered to an html string on the server. The output is logged directly to the console.

#### server-basic

This example extends upon basic by exposing the SSR output via an express web server. Navigating to `localhost:8080` will return a response with your current path displayed in the html. Try navigating to different paths to see the output update.


#### server-template-file

:tada: [Live Demo](https://vuejs-server-template-file-igjqzltugn.now.sh/)

This example extends upon server-basic by extracting the html content into a separate `index.template.html` file. Additionally, a context object is used to dynamically update attributes of the document. In this example, the `title` of the page dynamically reflects the time of page load.