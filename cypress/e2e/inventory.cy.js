import inventoryPage from '../pages/InventoryPage';

describe('Inventory functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.standard_user.username, users.standard_user.password);
    });
  });

  it('Displays all 6 products by default', () => {
    inventoryPage.getProductList().should('have.length', 6);
  });

  it('Sorts products by Price (low to high)', () => {
    inventoryPage.sortBy('lohi');
    // Verify first item is cheapest
    inventoryPage.getProductList().eq(0).find('.inventory_item_price').should('contain', '$7.99');
  });

  it('Sorts products by Name (Z to A)', () => {
    inventoryPage.sortBy('za');
    inventoryPage.getProductList().eq(0).find('.inventory_item_name').should('contain', 'Test.allTheThings()');
  });

  it('Adds a single item to the cart', () => {
    inventoryPage.addToCart('Sauce Labs Backpack');
    inventoryPage.getCartCount().should('have.text', '1');
  });

  it('Adds multiple items to the cart', () => {
    inventoryPage.addToCart('Sauce Labs Backpack');
    inventoryPage.addToCart('Sauce Labs Bike Light');
    inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
    inventoryPage.getCartCount().should('have.text', '3');
  });
});
