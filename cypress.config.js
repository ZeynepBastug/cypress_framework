const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specifying test files location
    specPattern: 'cypress/integration/examples/*.js'
  },
});
