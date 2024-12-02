const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qastoredesafio.lojaintegrada.com.br',
    supportFile: 'cypress/support/commands.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    env: {
      CYPRESS_USERNAME: 'tarik.feitosa@gmail.com',
      CYPRESS_PASSWORD: 'senha@123',
    },
  },
});
