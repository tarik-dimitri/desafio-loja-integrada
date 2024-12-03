///<reference types="cypress"/>
import { SELECTORS } from '../support/selectors';

describe('Validação de Cupom Inválido', () => {
  before(() => {
    cy.login(); // GIVEN que estou autenticado no sistema
  });

  it('Deve exibir mensagem de erro ao aplicar cupom inválido', () => {
   // GIVEN que estou na página de produtos
    cy.visit('/produtooolalal');

// WHEN adiciono um produto ao carrinho
    cy.get(SELECTORS.product.firstProductButton).click();
    cy.get('.fancybox-skin').should('be.visible');

   // AND verifico e removo um cupom previamente aplicado, se existir
    cy.get('body').then(($body) => {
      if ($body.find(SELECTORS.cart.errorMessage).length > 0) {
        cy.get(SELECTORS.cart.errorMessage).click();
      }
    });

   // AND tento aplicar um cupom inválido
    cy.get(SELECTORS.cart.discountField).type('CUPOMINVALIDO');
    cy.get(SELECTORS.cart.applyCouponButton).click();

   // THEN recebo uma mensagem indicando que o cupom é inválido
    cy.url().should('include', '/carrinho/index');
    cy.contains('Cupom não encontrado').should('be.visible');
  });
});
