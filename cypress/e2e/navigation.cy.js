describe('Global Navigation functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });
  });

  it('Opens side menu and logs out', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('Opens side menu and resets app state', () => {
    // Add item to cart to test reset
    cy.get('[data-test^="add-to-cart"]').first().click();
    cy.get('.shopping_cart_badge').should('exist');
    
    cy.get('#react-burger-menu-btn').click();
    cy.get('#reset_sidebar_link').click();
    
    // Badge should be gone after reset
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('Opens side menu and goes to about page', () => {
    // Intercept to prevent actually navigating away during tests
    cy.window().then((win) => {
        cy.stub(win, 'location').as('windowLocation');
    });

    cy.get('#react-burger-menu-btn').click();
    
    // Since we intercept, we just assert the href property
    cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/');
  });
});
