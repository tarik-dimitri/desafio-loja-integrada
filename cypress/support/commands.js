Cypress.Commands.add('login', () => {
    // Acessa a página de login
    cy.visit('/conta/login');
  
    // Insere as credenciais do usuário
    cy.get('#id_email').type(Cypress.env('CYPRESS_USERNAME')); // Campo de e-mail
    cy.get('#id_senha').type(Cypress.env('CYPRESS_PASSWORD')); // Campo de senha
  
    // Clica no botão "Prosseguir"
    cy.get('.controls > .botao').click(); // Botão de login
  
    // Valida o redirecionamento para a página inicial
    cy.url().should('include', '/conta/index');
  });
  