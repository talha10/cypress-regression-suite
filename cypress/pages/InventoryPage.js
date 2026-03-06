class InventoryPage {
  getProductList() {
    return cy.get('.inventory_item');
  }

  sortBy(optionText) {
    cy.get('[data-test="product_sort_container"]').select(optionText);
  }

  addToCart(productName) {
    cy.contains('.inventory_item', productName)
      .find('button[data-test^="add-to-cart"]')
      .click();
  }

  getCartCount() {
    return cy.get('.shopping_cart_badge');
  }
  
  openCart() {
      cy.get('.shopping_cart_link').click();
  }
}

export default new InventoryPage();
