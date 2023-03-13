Feature: End to end Ecommerce validation
  application regression

  Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I add items to Cart
    When Validate the total prices
    Then Select the country, submit and verify Thank You message

  Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill out the form details
      | name | gender | email       | password |
      | Bob  | Male   | bob@asd.com | ankara   |
    When I click the Submit button
    Then Success message is shown
