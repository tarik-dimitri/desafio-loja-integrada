const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qastoredesafio.lojaintegrada.com.br', // URL base para os testes
    supportFile: 'cypress/support/e2e.js', // Caminho para o arquivo de suporte
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000, // Tempo máximo para um comando ser concluído
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    env: {
      CYPRESS_USERNAME: 'tarik.feitosa@gmail.com', // Usuário de login
      CYPRESS_PASSWORD: 'senha@123', // Senha de login
    },
  },
});
