// cypress/support/commands.js
// Custom commands for reuse across specs

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addItemToCart', (itemName) => {
  cy.contains('.inventory_item', itemName)
    .find('button[data-test^="add-to-cart"]')
    .click();
});

Cypress.Commands.add('clearCart', () => {
    cy.window().then((win) => {
        win.sessionStorage.clear()
    });
    cy.reload();
});
