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

  // Login with correct credentials
  userTypesCorrectEmailAddressAndPassword() {
    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");

    if (!username || !password) {
      throw new Error("USERNAME or PASSWORD environment variable is not defined.");
    }

    cy.log("Using username: ", username);
    this.pageElements.emailAddressInputField()
      .should('be.visible')
      .type(username);
    this.pageElements.passwordInputField()
      .should('be.visible')
      .type(password);
    this.pageElements.loginBtn().click();
  }

  // Verify successful login
  verifySuccessfulLogin() {
    this.pageElements.successfulLoginMsg().should('be.visible');
  }

  // Function to enter invalid credentials
  userTypesIncorrectEmailAddressAndPassword() {
    const wrongUsername = Cypress.env("WRONGUSERNAME");
    const wrongPassword = Cypress.env("WRONGPASSWORD");

    if (!wrongUsername || !wrongPassword) {
      throw new Error("WRONGUSERNAME or WRONGPASSWORD environment variable is not defined.");
    }

    cy.log("Using wrong username: ", wrongUsername);
    this.pageElements.emailAddressInputField()
      .should('be.visible')
      .type(wrongUsername);
    this.pageElements.passwordInputField()
      .should('be.visible')
      .type(wrongPassword);
    this.pageElements.loginBtn().click();
  }

  // Verify unsuccessful login
  verifyErrorMessageExists() {
    this.pageElements.verifyErrorMessageExists().should('be.visible');
  }

  // Click on the logout button
  clickOnLogOutButton() {
    this.pageElements.logOutBtn().should('be.visible').click();
  }
}

export const loginPage = new LoginPage();
