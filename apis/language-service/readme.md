# language-service

This is a service built with [micro](https://github.com/zeit/micro) to facilitate real-world examples. [micro-dev](https://github.com/zeit/micro-dev) is used in development environments for hot-reloading and console output of errors and requests.

#### Example:

```sh
// request
GET https://vuejs-i18n-language-service-pxwfqjoswk.now.sh/en

// response
{
  "greetings": {
      "helloWorld": "Hello World"
  }
}
```

#### Development:

To work on the language-service:

```js
npm install
npm run dev
```

