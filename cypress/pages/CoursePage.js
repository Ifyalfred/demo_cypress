class CoursePage {
  // Element Section
  pageElements = {
    loginSuccessfulMsg: () => cy.get("button").contains('Login Successful'),
    
    coursePageTitle: () => cy.contains('List of Courses'),

    addCourseBtn: () => cy.get("button").contains('Add Course'),

    accountName: () => cy.get("button").contains("Ayobami"),

    logOut: () => cy.get("button").contains("LOG OUT"),


    

    emailAddressInputField: () => cy.get('[data-testid="EmailAddress"]'),

    passwordInputField: () => cy.get('[data-testid="Password"]'),

    loginBtn: () => cy.get("button").contains("Login"),

    loginButton: () => cy.get('[data-testid="LoginButton"]'),

    successfulLoginMsg: () => cy.contains('Login Successful'),

    verifyErrorMessageExists: () => cy.contains('Invalid Login Credential'),

    listOfCourse: () => cy.get("button").contains("List of Courses"),

    courseTitle: () => cy.get('[data-testid="Title*"]'),

    courseDescription: () => cy.get('[data-testid="Description*"]'),

    courseCategory: () => cy.get('#demo-simple-select'),

    courseCategoryList: () => cy.get('#menu- > .MuiPaper-root > .MuiList-root'),

    courseUrl: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),

    courseLocationList: () => cy.get('.MuiFormGroup-root'),

    courseAddBtn: () => cy.get('[data-testid="+ ADD COURSE"]'),

    accountName: () => cy.get("button").contains("Ayobami"),
    
    verifySuccessMessage: () => cy.contains('Course created successfully'),

    logOutBtn: () => cy.get("button").contains("LOG OUT"),
  };

  // Action Section
  visitCoursePage() {
    cy.visit('/courses');
  }

  userClicksAddCourseBtn() {
    this.pageElements.addCourseBtn().click();
    cy.wait(1000); // wait for 1 second
  }

  clickAddCourseButton() {
    cy.get('#root > div.MuiBox-root.css-k008qs > main > div.MuiContainer-root.MuiContainer-maxWidthXl.css-18anmv3 > div > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > button').click();
  }

  userTypesCorrectEmailAddressAndPassword() {
    this.pageElements.emailAddressInputField().type(Cypress.env("USERNAME"));
    this.pageElements.passwordInputField().type(Cypress.env("PASSWORD"));
    this.pageElements.loginBtn().click();
  }

  userInputCourseDetailsAndSelectOnlineLocation() {
    const courseTitle = 'Freddy on the wheels';
    const courseUrl = 'https://www.youtube.com/watch?v=jX3v3N6oN5M';  // youtube url
    const courseDescription = 'We keep learning Cypress';

    this.pageElements.courseTitle().type(courseTitle, { force: true });
    this.pageElements.courseDescription().type(courseDescription, { force: true });
    this.pageElements.courseCategory().click();
    cy.wait(2000); // wait for 1 second
    this.pageElements.courseCategoryList().contains('Quality Assurance').click();
    //this.pageElements.courseImageURL().type(courseOnlineUrl, { force: true });
    this.pageElements.courseLocationList().contains('Online').click();
    this.pageElements.courseUrl().type(courseUrl, { force: true });
    
  }

  clickAddButton() {
    this.pageElements.courseAddBtn().click();
  }


  verifyRedirectToOnlineCourses() {
    cy.url().should('include', '/online-courses');
  }

  clickOnCourseCard() {
    cy.get('.course-card').first().click();
  }

userClicksAddCourseBtnAfterInputtingDetails(){
  cy.get('.css-tzsjye > .MuiButton-root').first().click();
}

verifySuccessMessage() {
  this.pageElements.verifySuccessMessage().should('be.visible');
}
}
export const coursePage = new CoursePage();
