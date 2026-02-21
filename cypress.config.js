const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://my-qbgzo-qacs3.vgabriel.personal.purple-lab.dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
