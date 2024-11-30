class HomePage {
     //This method verifies that the user is logged into the Home page of the app.
    pageElements = {
       loginSuccessfulMsg: () =>cy.contains("Login Successful"),
       addCourseBtn: () => cy.contains("Add Course"),
       logOutBtn: () => cy.get("button").contains("Log Out"),
       coursesText: () => cy.contains('Course'), // replace with the actual selector
       ayobamiText: () => cy.contains('Ayobami'), // replace with the actual selector
  }

    verifySuccessfulLogin()
    {
      //checks that the new url contains the strings courses
      cy.url().should( "contains", "/courses")
      this.pageElements.loginSuccessfulMsg().should ("be.visible")
      this.pageElements.addCourseBtn().should ("be.visible")
  
      // Additional assertions to check the "courses" and "Ayobami" text
      this.pageElements.coursesText().should ("be.visible")
      this.pageElements.ayobamiText().should ("be.visible")


      //cy.wait(4000)
       // checks that the log out button is visible
      this.pageElements.logOutBtn().should("be.visible")
    }    
  
}

export const homePage = new HomePage();
  


