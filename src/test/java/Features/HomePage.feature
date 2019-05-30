Feature: HomePage

  @Ready
  Scenario: Home Page check
    Given Home Page
    Then footer is correct
    Then menu is correct
    Then elements are correct