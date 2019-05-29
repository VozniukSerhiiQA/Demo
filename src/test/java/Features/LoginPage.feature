Feature: LoginPage

  Background: Log In feature.

  @Ready
  Scenario: Login Page check
    Given Home Page
    When I navigate to Login page
    Then I see Create an account form
    Then I see Sign In form

  @InProgress
  Scenario: Create new user
    Given Home Page
    When I navigate to Login page
    And I create a user
    Then I see newly created user