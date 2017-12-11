# Testing

### Resources

- [vue-test-utils](https://vue-test-utils.vuejs.org/en/) - rendering and dom helper library


### example ([more](example))

:tada: [Live Demo](https://expensive-plant.surge.sh/)

This example shows the basics of unit and e2e testing of basic vue components.

**Unit Testing:**

Tools: [vue-test-utils](https://github.com/vuejs/vue-test-utils), [jest](https://facebook.github.io/jest/)

Unit tests can be found in the [unit/specs](example/test/unit/specs) folder for the [Counter](example/src/components/Counter.vue) and [Toggle](example/src/components/Toggle.vue) components. Note the ability to `shallow` render these components for testing, allowing for dom-like interaction and events without the need for a browser. This allows for isolated testing of the components that execute very quickly.

**E2E Testing:**

Tools: [nightwatch.js](http://nightwatchjs.org)

E2E tests can be found in the [e2e/specs](example/test/e2e/specs) folder. The E2E tests are browser automation tests and when run will launch and orchestrate a browser on your machine via selenium. Tests are written with [nightwatch.js](https://nightwatchjs.org) which provides `expect`, `assert` and `command` apis.

**Note:** The [example](example) project is a full app boilerplate generated with the vue-cli webpack [template](https://github.com/vuejs-templates/webpack). Because of this, there is a lot more than testing going on in this folder. Focus on the [components](example/src/components) and [test](example/test) folders for the purposes of the _testing_ evaluation.
