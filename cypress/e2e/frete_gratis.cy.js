describe('Cupom de Frete Grátis', () => {
  before(() => {
    cy.login(); // Realiza login
  });

  it('Deve validar a inclusão do cupom FRETEGRATIS e verificar o frete grátis na tela do carrinho', () => {
    // Navega para a página de produtos
    cy.visit('/produtooolalal');

    // Seleciona o primeiro produto
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

    // Insere o cupom de desconto
    cy.get('#usarCupom').type('FRETEGRATIS');
    cy.get('button').contains('Usar cupom').click();

    // Aguarda o redirecionamento para a página do carrinho
    cy.url().should('include', '/carrinho/index');

    // Rola a página até o final para validar o cupom aplicado
    cy.scrollTo('bottom');

    // Valida a opção de frete grátis
    cy.contains('1 dia útil R$ 0,00 Frete Grátis').should('exist'); // Verifica se o texto correto está visível
  });
});
