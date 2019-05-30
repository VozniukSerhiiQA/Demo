Feature: LoginPage

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
    And I create an invalid user
    Then I see an alert of invalid user creation

  @Ready
  Scenario: Create new valid user
    Given Home Page
    When I navigate to Login page
    And I create valid user
    Then I see My Account