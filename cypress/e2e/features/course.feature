Feature: Course Management Functionality

The purpose of this feature is to verify that the course management functionality of the Quales Edu application works as expected.

     Background: Users needs to be present in the quales edu app course page

     #The given syntax is a pre-requisite
     Given A user is present on the Quales Edu library course page

          Scenario: Successfully add a course online to the Quales Edu web app
          When The user clicks on adds a course button
          When The user inputs course details and selects online location
          When The user clicks the + add button after inputting details
          Then A successfully message should be visible and user should be redirected to the online course page

          #The given syntax is a pre-requisite
     #Given A user is present on the Quales Edu library course page
     
     #Scenario: Successfully add a course online to the quales edu web app
     #The When synatax specifies the actions the user performs
     #When The user clicks on adds a course button
     #When The user clicks the + add button after inputting details
     #The Then  syntax specifies the expected outcome of the test
     #Then A successfully message should be visible and user should be directed to the online course page

          #The given syntax is a pre-requisite
     #Given A user is present on the Quales Edu library course page
          #Scenario: Successfully add a course offline to the quales edu web app
          #When The When syntax specifies the actions the user performs
          #When The user clicks on adds a course button 
          #When The user inputs course details and selects offline location
          #When The user clicks the add course button
          #When The Then syntax specifies the expected outcome of the test
          #Then A successfully message should be visible and user should be redirected to the offline course page

          
     #Given A course exists in the user's course list
          #Scenario: Successfully edit a course on the quales edu web app
          #When The user clicks on a course and its directed to the specific course page
          #When The user clicks on edit button and its directed to the edit page 
          #When The user update course details and click on update course button 
          #Then A message update course successfully should be visible and user should be redirected to the course page

          
     #Given A course exists in the user's course list
          #Scenario: Successfully delete a course on the quales edu web app
          #When The user clicks on a course and its directed to the course page
          #When The user clicks on delete button and confirms delete action
          #Then A delete success message should be visible and user should be redirected to the course page