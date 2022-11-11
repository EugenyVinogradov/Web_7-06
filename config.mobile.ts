import { defineConfig } from "cypress";

export default defineConfig({


  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    "baseUrl": "http://localhost:3000",
    "retries": 1,
    "viewportHeight": 2400,
    "viewportWidth": 1080,
  },
});