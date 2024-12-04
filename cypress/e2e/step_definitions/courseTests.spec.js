//cypress 
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '@pages/LoginPage';
import { homePage } from '@pages/HomePage';
// courseTests.spec.js
import { coursePage } from '@pages/CoursePage'; // Import the named export


Given ('A user is present on the Quales Edu library course page', () => 
        {   //Use the visit method from the LoginPage
            cy.visit('/login');
            loginPage.userTypesCorrectEmailAddressAndPassword(),

            //Use the login method from the LoginPage
            //loginPage.login('ay@mail.com', 'pass1234');
            //Use the clickOnAddCourseButton method from the HomePage
            homePage. verifySuccessfulLogin(),

            //Use the clickOnAddCourseButton method from the CoursePage
            coursePage.visitCoursePage(),
            cy.visit('/courses')
            
        }
)

          //Scenario: Successfully add a course online to the quales edu web app
          //The When synatax specifies the actions the user performs
    When ('The user clicks on adds a course button', () => {
          coursePage.userClicksAddCourseBtn()
          })
    When ('The user inputs course details and selects online location', () => { 
        coursePage.userInputCourseDetailsAndSelectOnlineLocation()
          })
    When ('The user clicks the + add button after inputting details', () => { 
            coursePage.userClicksAddCourseBtnAfterInputtingDetails()
              })
          //The Then  syntax specifies the expected outcome of the test
    Then ('A successfully message should be visible and user should be redirected to the online course page', () => { 
        coursePage.verifySuccessMessage()
          })
        
    //When ('The user select add a course button ', () => {
      //  coursePage.userSelectAddCourseBtn()
        //  })
    //When ('The user inputs course details and select offline location', () => {
      //  coursePage.userInputCourseDetailsAndSelectOfflineLocation()
        //  })
          //The Then  syntax specifies the expected outcome of the test
    //When ('The user clicks the add course button')  
     //   coursePage.userClicksAddCourseBtn()   
    //Then ('A successfully message should be visible and user should be directed to the offline course page', () => {
      //  coursePage.verifySuccessfulOfflineMsg()
        //  })

          //Scenario: Successfully edit a course on the quales edu web app
//    When ('The user clicks on a course and its directed to the specific course page', () => {
     //   coursePage.UserClicksOnSpecificCourse()
  //  })
    //When ('The user clicks on edit button and its directed to the edit page', () => {
       // coursePage.UserClicksOnEditBtn()
   // })

    //When ('The user update course details and click on update course button', () => {
      //  coursePage.UserUpdateCourseAndClicksOnUpdateCourseBtn()
        //  })
    //Then ('A message update course successfully should be visible and user should be redirected to the course page', () => {
      //  coursePage.verifyCourseUpdatedSuccessfulMsg()
        //  })
          //Scenario: Successfully delete a course on the quales edu web app
    //When ('The user clicks on a course and its directed to the course page', () => {
      //  coursePage.UserClicksOnACourseBtn()
        //  })
    //When ('The user clicks on delete button and confirms delete action', () => {
      //  coursePage.UserClicksOnDeleteBtn()
        //  })
    //Then ('A delete success message should be visible and user should be redirected to the course page', () => {
      //  coursePage.verifyCourseDeletedSuccessfulMsg()
        //  });
