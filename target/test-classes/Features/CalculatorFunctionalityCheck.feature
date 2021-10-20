Feature: Calculator Functionality Check

  @CheckUrl
  Scenario: Validate calculator webpage
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    Then i should be able to see page title as "Evil Calculator"

  @CheckButtonColor
  Scenario Outline: Validate AC and equal to button colors
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    When i validate "<button>" color
    Then i should be able to see button with desire "<color>"
    Examples:
      | button   | color    |
      | AC       | Red      |
      | Equals   | Green    |

  @CheckAdditionFunctionality
  Scenario Outline: Validate addition functionality
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    When i enter "<num1>" and press "Addition" and enter "<num2>"
    Then i should be able to see result as "<result>"
    Examples:
      | num1   | num2    |result |
      | 5      | 6       |11     |
      | 3      | 11      |14     |

  @CheckSubtractionFunctionality
  Scenario Outline: Validate Subtraction functionality
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    When i enter "<num1>" and press "Subtraction" and enter "<num2>"
    Then i should be able to see result as "<result>"
    Examples:
      | num1   | num2    |result |
      | 9      | 2       | 7     |
      | 6      | 2       | 4     |

  @CheckMultiplicationFunctionality
  Scenario Outline: Validate multiplication functionality
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    When i enter "<num1>" and press "Multiplication" and enter "<num2>"
    Then i should be able to see result as "<result>"
    Examples:
      | num1   | num2    |result |
      | 4      | 2       | 8     |
      | 3      | 8       |24     |

  @CheckDivisionFunctionality
  Scenario Outline: Validate division functionality
    Given i am navigated to "https://evilcalculator-5a169.web.app/" calculator page
    When i enter "<num1>" and press "Division" and enter "<num2>"
    Then i should be able to see result as "<result>"
    Examples:
      | num1   | num2    |result |
      | 9      | 2       | 4.5   |
      | 6      | 2       | 3     |

