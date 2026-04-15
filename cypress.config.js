const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});