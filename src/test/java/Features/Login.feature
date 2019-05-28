Feature: LoginFeature
  This feature deals with login functionality

  Scenario: Login with correct username and password
    Given I navigate to the login page
    And I enter next for log in
      | username     | password |
      | mage_gorilla | Monkey1  |
    Then I should the user form page