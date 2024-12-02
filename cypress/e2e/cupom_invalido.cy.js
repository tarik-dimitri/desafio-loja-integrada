///<reference types="cypress"/>
describe('Validação de Cupom Inválido', () => {
  before(() => {
    cy.login(); // Realiza login antes de acessar a página de produtos
  });

  it('Deve exibir mensagem de erro ao aplicar cupom inválido', () => {
    // Navega para a página de produtos
    cy.visit('/produtooolalal');

    // Seleciona o produto
    cy.get(':nth-child(1) > .listagem-item > .acoes-produto > .botao').click();

    // Valida a tela flutuante exibida
    cy.get('.fancybox-skin').should('be.visible'); // Verifica que a modal está visível

    // Verifica se já existe um cupom aplicado
    cy.get('body').then(($body) => {
      if ($body.find('.text-error').length > 0) {
        // Remove o cupom se estiver ativo
        cy.get('.text-error').click();
      }
    });

    // Insere o cupom de desconto inválido
    cy.get('#usarCupom').type('ERRADO1234');
    cy.get('button').contains('Usar cupom').click();

    // Aguarda o redirecionamento para a página do carrinho
    cy.url().should('include', '/carrinho/index');

    // Valida a mensagem de erro
    cy.contains('Cupom não encontrado').should('be.visible');
  });
});
