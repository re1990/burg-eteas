const { defineConfig } = require("cypress");
projectId: "ddnt5i",

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
