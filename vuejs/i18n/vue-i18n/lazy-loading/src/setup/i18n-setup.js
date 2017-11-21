import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    fallbackLocale: 'en'
})

const loadedLanguages = new Set()

function setI18nLanguage (lang) {
    i18n.locale = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

// in a production environment, this would be in a config
const languageApi = 'https://vuejs-i18n-language-service-pxwfqjoswk.now.sh/'

export function loadLanguageAsync(lang) {
    if (i18n.locale === lang)
        return Promise.resolve(lang)

    if (loadedLanguages.has(lang))
        return Promise.resolve(setI18nLanguage(lang))

    return axios.get(`${languageApi}${lang}`)
        .then(response => {
            i18n.setLocaleMessage(lang, response.data)
            loadedLanguages.add(lang)
            return setI18nLanguage(lang)
        })
        .catch(() => {
            // set locale and allow i18n to use `fallbackLocale`
            return setI18nLanguage(lang)
        })
}
