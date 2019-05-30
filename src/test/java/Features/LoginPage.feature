Feature: LoginPage

  Background: Log In feature.

  @Ready
  Scenario: Login Page check
    Given Home Page
    When I navigate to Login page
    Then I see Create an account form
    Then I see Sign In form

  @Ready
  Scenario: Create new invalid user
    Given Home Page
    When I navigate to Login page
    And I create a user
    Then I see an alert of invalid user creation