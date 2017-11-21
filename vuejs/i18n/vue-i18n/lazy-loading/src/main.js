import Vue from 'vue'
import App from './App.vue'
import * as i18n from './setup/i18n-setup'

/*
 * Pre-fetch default language before mounting app
 * In production you would want to:
 *    - Embed default locale in html as script
 *    - Embed default locale in bundle or SSR
 */ 
i18n.loadLanguageAsync('en')
  .then(() => {
    new Vue({
      i18n: i18n.i18n,
      el: '#app',
      render: h => h(App)
    })
  })


