import inventoryPage from '../pages/InventoryPage';
import cartPage from '../pages/CartPage';

describe('Shopping Cart functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });
    // Add product to cart to test cart page
    inventoryPage.addToCart('Sauce Labs Backpack');
    inventoryPage.openCart();
  });

  it('Displays items added to cart', () => {
    __getCartItems().should('have.length', 1);
    __getCartItems().eq(0).should('contain', 'Sauce Labs Backpack');
  });

  it('Removes items from cart', () => {
    cartPage.removeItem('Sauce Labs Backpack');
    __getCartItems().should('not.exist');
  });

  it('Continues shopping from cart', () => {
    cartPage.continueShopping();
    cy.url().should('include', '/inventory.html');
  });

  it('Proceeds to checkout', () => {
    cartPage.proceedToCheckout();
    cy.url().should('include', '/checkout-step-one.html');
  });

  // Helper inside scope for demonstration
  function __getCartItems() {
    return cartPage.getItems();
  }
});
