module.exports = {
  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.counter')
      .assert.elementPresent('.toggle')
      .assert.containsText('h1', 'Testing Demos')
      .assert.elementCount('img', 1)
      .assert.elementCount('h3', 2)
      .end()
  },

  'counter tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('.counter p', 'The current count is 0.')
      .click('.counter button.add')
      .assert.containsText('.counter p', 'The current count is 1.')
      .click('.counter button.add')
      .assert.containsText('.counter p', 'The current count is 2.')
      .click('.counter button.remove')
      .click('.counter button.remove')
      .click('.counter button.remove')
      .click('.counter button.remove')
      .assert.containsText('.counter p', 'The current count is -2.')
      .end()
  },

  'toggle tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementNotPresent('.toggle p.message')
      .click('.toggle button')
      .assert.elementPresent('.toggle p.message')
      .click('.toggle button')
      .assert.elementNotPresent('.toggle p.message')
      .click('.toggle button')
      .assert.elementPresent('.toggle p.message')
      .assert.containsText('.toggle p.message', 'Hello from Toggle.vue!')
      .end()
  }
}
