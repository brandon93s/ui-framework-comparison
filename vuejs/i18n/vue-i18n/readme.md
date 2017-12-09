# vue-i18n

### Resources

- [Documentation](https://kazupon.github.io/vue-i18n/en/)

### Examples

#### simple

:tada: [Live Demo](https://simple-rqvltoaqbr.now.sh)

This example shows a simple `vue-i18n` implementation in a single `index.html` file. The page supports switching between locales via `?locale={code}`.

#### lazy-loading

:tada: [Live Demo](https://lazy-loading-mlkujwscau.now.sh/)

This example takes seeks to take a more real-world approach, building the app with: [webpack](https://webpack.js.org/), [single file components](https://vuejs.org/v2/guide/single-file-components.html) and modern JavaScript language features. Translations are served from a [language service](/apis/language-service) and are lazy-loaded from the remote server as the user picks a language. This is intended to illustrate the extraction and separation of display text from application code, with the application only concerned with identifiers. View the above demo with your network tab in the console open to see translations loading as remote resources.
