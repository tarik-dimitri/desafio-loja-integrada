import { SELECTORS } from '../support/selectors';

describe('Cupom de Frete Grátis', () => {
  before(() => {
    cy.login(); // GIVEN que estou autenticado no sistema
  });

  it('Deve aplicar o cupom FRETEGRATIS corretamente', () => {
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

// AND aplico o cupom FRETEGRATIS
    cy.get(SELECTORS.cart.discountField).type('FRETEGRATIS');
    cy.get(SELECTORS.cart.applyCouponButton).click();

// THEN o frete grátis é exibido como opção válida no carrinho
    cy.url().should('include', '/carrinho/index');
    cy.scrollTo('bottom');
    cy.contains(SELECTORS.cart.freeShippingText).should('exist');
  });
});
