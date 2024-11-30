// cypress/integration/login.js

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '@pages/LoginPage';
import { homePage } from '@pages/HomePage';


Given('A user is at the quales edu library login page', () => {
  // Use the visit method from the LoginPage
  cy.visit('/login');
  }
);
 // Successful Login Scenario
  When('The User enters their correct credentials and click on the login button', () => {
  loginPage.userTypesCorrectEmailAddressAndPassword();
  loginPage.verifySuccessfulLogin() // Implement this method in LoginPage
  }
);
  Then('The User should be directed to the quales home page', () => {
  homePage.verifySuccessfulLogin();
 }
);

  // Negative Login Scenario (assuming error message element exists)
Given('A user is at the quales edu portal login page', () => { 
  // Use the visit method from the LoginPage
  cy.visit("/login");
  });
  When('The User enters incorrect credentials and click on the login button', () => { 
  loginPage.userTypesIncorrectEmailAddressAndPassword(); // Implement this method in LoginPage
  }
 );
Then('The user should see an error message indicating invalid credentials', () => {
  loginPage.verifyErrorMessageExists(); // Implement this method in LoginPage
});


// Use the login method from the LoginPage
//loginPage.login('ay@mail.com', 'pass1234'); 
//Then('the user should be redirected to the dashboard', () => {
//cy.url().should('include', '/courses'); // Adjust the URL part as per your application's routing
//});
// cypress/integration/login.js
