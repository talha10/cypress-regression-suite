class CartPage {
  getItems() {
    return cy.get('.cart_item');
  }

  removeItem(productName) {
    cy.contains('.cart_item', productName)
      .find('button[data-test^="remove-"]')
      .click();
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
  
  continueShopping() {
      cy.get('[data-test="continue-shopping"]').click();
  }
}

export default new CartPage();
