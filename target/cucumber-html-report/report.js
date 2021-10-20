$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/CalculatorFunctionalityCheck.feature");
formatter.feature({
  "name": "Calculator Functionality Check",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate calculator webpage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CheckUrl"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see page title as \"Evil Calculator\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeePageTitleAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate AC and equal to button colors",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckButtonColor"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.step({
  "name": "i validate \"\u003cbutton\u003e\" color",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to see button with desire \"\u003ccolor\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "button",
        "color"
      ]
    },
    {
      "cells": [
        "AC",
        "Red"
      ]
    },
    {
      "cells": [
        "Equals",
        "Green"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate AC and equal to button colors",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckButtonColor"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i validate \"AC\" color",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iValidateColor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see button with desire \"Red\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeButtonWithDesire(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate AC and equal to button colors",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckButtonColor"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i validate \"Equals\" color",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iValidateColor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see button with desire \"Green\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeButtonWithDesire(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate addition functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckAdditionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter \"\u003cnum1\u003e\" and press \"Addition\" and enter \"\u003cnum2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to see result as \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "5",
        "6",
        "11"
      ]
    },
    {
      "cells": [
        "3",
        "11",
        "14"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate addition functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckAdditionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"5\" and press \"Addition\" and enter \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"11\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate addition functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckAdditionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"3\" and press \"Addition\" and enter \"11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"14\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate Subtraction functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckSubtractionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter \"\u003cnum1\u003e\" and press \"Subtraction\" and enter \"\u003cnum2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to see result as \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "9",
        "2",
        "7"
      ]
    },
    {
      "cells": [
        "6",
        "2",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Subtraction functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckSubtractionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"9\" and press \"Subtraction\" and enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Subtraction functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckSubtractionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"6\" and press \"Subtraction\" and enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate multiplication functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckMultiplicationFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter \"\u003cnum1\u003e\" and press \"Multiplication\" and enter \"\u003cnum2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to see result as \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "4",
        "2",
        "8"
      ]
    },
    {
      "cells": [
        "3",
        "8",
        "24"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate multiplication functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckMultiplicationFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"4\" and press \"Multiplication\" and enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate multiplication functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckMultiplicationFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"3\" and press \"Multiplication\" and enter \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"24\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate division functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckDivisionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter \"\u003cnum1\u003e\" and press \"Division\" and enter \"\u003cnum2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to see result as \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "9",
        "2",
        "4.5"
      ]
    },
    {
      "cells": [
        "6",
        "2",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate division functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckDivisionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"9\" and press \"Division\" and enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"4.5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate division functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CheckDivisionFunctionality"
    }
  ]
});
formatter.step({
  "name": "i am navigated to \"https://evilcalculator-5a169.web.app/\" calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iAmNavigatedToCalculatorPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"6\" and press \"Division\" and enter \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iEnterAndPressAndEnter(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to see result as \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CalculatorButtonColors.iShouldBeAbleToSeeResult(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});