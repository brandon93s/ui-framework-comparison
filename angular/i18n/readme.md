# Angular i18n

### Resources

- [Documentation](https://angular.io/guide/i18n) : Out of the box support
- [Documentation](http://www.ngx-translate.com/) : ngx-translate library

### Examples

#### Out of the box

:tada: Live Demo ([en](https://acid-key.surge.sh/), [fr](https://versed-throat.surge.sh/) )

- [Example](compile-time)

The default approach in Angular is to generate the app for different target languages at compile time. The app will still have a single codebase, but the ng cli tools will output a separate copy for each language. Language switching requires page reload, and should be handled either via different directories (/en/, /fr/), or querystring parameters (?language=en, ?language=fr).

#### lazy-loading with ngx-translate

:tada: [Live Demo](https://tan-hair.surge.sh)

- [Example](lib-ngx-translate)

ngx-translate is a more robust option than the out-of-box behavior. This allows loading translations from a remote server, or defining them locally.
