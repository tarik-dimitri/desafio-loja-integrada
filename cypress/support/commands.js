import { SELECTORS } from './selectors';

// Comando para realizar login com credenciais fornecidas
Cypress.Commands.add('login', () => {
  cy.visit('/conta/login');
  cy.get(SELECTORS.login.email).type(Cypress.env('CYPRESS_USERNAME'));
  cy.get(SELECTORS.login.password).type(Cypress.env('CYPRESS_PASSWORD'));
  cy.get(SELECTORS.login.submitButton).click();
  cy.url().should('include', '/conta/index');
});

// Comando para aplicar um cupom no carrinho
Cypress.Commands.add('applyCoupon', (couponCode) => {
  cy.get(SELECTORS.cart.discountField).type(couponCode);
  cy.get(SELECTORS.cart.applyCouponButton).click();
});
