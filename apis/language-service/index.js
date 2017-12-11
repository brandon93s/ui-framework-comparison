// Live URL: https://vuejs-i18n-language-service-pxwfqjoswk.now.sh

/**
 * Update the following locations on new deployment:
 * - vuejs/i18n/vue-i18n/lazy-loading
 * - angular/i18n/lib-ngx-translate
 */

const cors = require('micro-cors')()

/*
 * Build mock translations store
 */
const build = msg => { return { greetings: { helloWorld: msg }}}
const languages = new Map();

languages.set('en', build('Hello World'))
languages.set('es', build('Hola mundo'))
languages.set('ja', build('こんにちは世界'))
languages.set('it', build('Ciao mondo'))
languages.set('zh', build('你好世界'))
languages.set('nl', build('Hallo wereld'))
languages.set('fr', build('Bonjour monde'))
languages.set('de', build('Hallo Welt'))
languages.set('el', build('γειά σου κόσμος'))
languages.set('ko', build('여보세요 세계'))
languages.set('pt', build('Olá mundo'))
languages.set('ru', build('Здравствулте мир'))


/*
 * Service exposing translations over http
 * GET /{locale}
 */
const err = (res, msg) => {
    res.statusCode = 500
    res.statusMessage = msg
    res.end()
}

const handler = (req, res) => {
    const localeMatches = req.url.match(/\/([a-zA-Z]{2})/)
    if (!localeMatches){
        err(res, 'No locale code provided')
        return
    }

    const locale = localeMatches[1]
    const response = languages.get(locale)
    if (!response) {
        err(res, `Locale '${locale}' is not supported`)
        return
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(response))
}

// Expose cors enabled api
module.exports = cors(handler)
