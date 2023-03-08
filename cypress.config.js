// this file is accessible for entire framework
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env:{
    url: "https://rahulshettyacademy.com/angularpractice/"
  },
  retries:{
    runMode: 1
    // this is how to set up rerun in cypress. to Find it go to project settings
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specifying test files location
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/screenshots'
  },
});
