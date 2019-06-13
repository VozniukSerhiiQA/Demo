Feature: CLP

  @Ready
  Scenario: CLP check
    Given Home Page
    When I click on "Women" category
    Then I see CLP page

  @Ready
  Scenario: Login Page check
    Given Home Page
    When I click on "Tops" sub-category
    Then I see sub-category on CLP page