import inventoryPage from '../pages/InventoryPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';

describe('Checkout functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
      inventoryPage.addToCart('Sauce Labs Backpack');
      inventoryPage.openCart();
      cartPage.proceedToCheckout();
    });
  });

  it('Completes standard checkout flow', () => {
    checkoutPage.enterDetails('TestQA', 'Engineer', '90210');
    cy.url().should('include', '/checkout-step-two.html');
    checkoutPage.finishCheckout();
    
    cy.url().should('include', '/checkout-complete.html');
    checkoutPage.getCompleteHeader().should('have.text', 'Thank you for your order!');
  });

  it('Validates required fields in checkout step one', () => {
    // Attempt continue without entering anything
    cy.get('[data-test="continue"]').click();
    checkoutPage.getErrorMessage().should('contain', 'First Name is required');
    
    // Fill first name
    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="continue"]').click();
    checkoutPage.getErrorMessage().should('contain', 'Last Name is required');
    
    // Fill last name
    cy.get('[data-test="lastName"]').type('QA');
    cy.get('[data-test="continue"]').click();
    checkoutPage.getErrorMessage().should('contain', 'Postal Code is required');
  });
});
