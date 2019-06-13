Feature: PLP

  @Ready
  Scenario: PDP check
    Given Home Page
    When I click on "Blouses" PLP category
    Then I see PLP page
    Then I see "Add to cart" button on product
    Then I see "Quick view" button on product
    Then I see "More" button on product
