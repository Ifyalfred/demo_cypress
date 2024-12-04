Feature: Login functionality

The test aims to confirm that the login functionality of this applications work appropriately
  
  Background: Users needs to be present in the quales edu app login page
  #The given syntax is a pre-quisite
 Given A user is at the quales edu library login page

 # Successful Login Scenario
  Scenario: Successful Login to the quales edu web app
    #The When synatax specifies the actions the user performs
    When The User enters their correct credentials and click on the login button
    #The Then  syntax specifies the expected outcome of the test
    Then The User should be directed to the quales home page

   # Negative Login Scenario (assuming error message element exists)
Given A user is at the quales edu portal login page
  Scenario: Unsuccessful Login to the quales edu web app
    #The When synatax specifies the actions the user performs
    When The User enters incorrect credentials and click on the login button
    #The Then  syntax specifies the expected outcome of the test
    Then The user should see an error message indicating invalid credentials
