import loginPage from '../pages/LoginPage';

describe('Authentication flows', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Logs in successfully with standard user', () => {
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.standard_user.username);
      loginPage.enterPassword(users.standard_user.password);
      loginPage.clickLogin();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Shows error for locked out user', () => {
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.locked_out_user.username);
      loginPage.enterPassword(users.locked_out_user.password);
      loginPage.clickLogin();
      loginPage.getErrorMessage().should('contain', 'locked out');
    });
  });

  it('Shows error for incorrect password', () => {
    cy.fixture('users').then((users) => {
      loginPage.enterUsername(users.standard_user.username);
      loginPage.enterPassword('wrong_password_123');
      loginPage.clickLogin();
      loginPage.getErrorMessage().should('contain', 'Username and password do not match');
    });
  });

  it('Shows error for missing username', () => {
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Username is required');
  });

  it('Shows error for missing password', () => {
    loginPage.enterUsername('standard_user');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Password is required');
  });
});
