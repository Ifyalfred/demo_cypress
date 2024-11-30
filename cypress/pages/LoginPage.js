class LoginPage {
  pageElements = {
    emailAddressInputField: () => cy.get('[data-testid="EmailAddress"]'), // Add the correct selector
    passwordInputField: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.get("button").contains("Login"), // Add the correct selector
    loginButton: () => cy.get('[data-testid="LoginButton"]'),
    successfulLoginMsg: () => cy.contains('Login Successful'),
    verifyErrorMessageExists: () => cy.contains('Invalid Login Credential'),
    logOutBtn: () => cy.get("button").contains("LOG OUT"),
  };

  //Login with correct credentials
  userTypesCorrectEmailAddressAndPassword() {
    this.pageElements.emailAddressInputField().type(Cypress.env("USERNAME"));
    this.pageElements.passwordInputField().type(Cypress.env("PASSWORD"));
    this.pageElements.loginBtn().click();
  }

  // Verify successful login
  verifySuccessfulLogin() {
    this.pageElements.successfulLoginMsg().should('be.visible');
  }

    // Function to enter invalid credentials (.replace with your logic)
  userTypesIncorrectEmailAddressAndPassword() {
    this.pageElements.emailAddressInputField().type(Cypress.env("WRONGUSERNAME")); // Replace with logic for invalid username
    this.pageElements.passwordInputField().type(Cypress.env("WRONGPASSWORD")); // Replace with logic for invalid password
    this.pageElements.loginBtn().click(); // Click login button
  }

  // Verify unsuccessful login
  verifyErrorMessageExists() {
    this.pageElements.verifyErrorMessageExists().should('be.visible');
  
  }
  //Click on the logout button
  clickOnLogOutButton() {
    this.pageElements.logOutBtn().click();
  }
}

export const loginPage = new LoginPage();
