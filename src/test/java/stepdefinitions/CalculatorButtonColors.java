package stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import pages.CalculatorTestPage;

import static config.BrowserLaunch.driver;

public class CalculatorButtonColors {

    CalculatorTestPage calculatorTestPage = new CalculatorTestPage();
    private String buttonColor;

    @After
    public void embedScreenshot(Scenario scenario) throws Exception {
        if (scenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                String testName = scenario.getName();
                scenario.embed(screenshot, "image/png");
                scenario.write(testName);
            } catch (WebDriverException wde) {
                System.err.println(wde.getMessage());
            } catch (ClassCastException cce) {
                cce.printStackTrace();}
        }
    }

    @Given("i am navigated to {string} calculator page")
    public void iAmNavigatedToCalculatorPage(String url) {
        calculatorTestPage.getCalculatorUrl(url);
    }

    @When("i validate {string} color")
    public void iValidateColor(String button) {
        buttonColor = calculatorTestPage.getButtoncolor(button);
    }

    @Then("i should be able to see button with desire {string}")
    public void iShouldBeAbleToSeeButtonWithDesire(String color) {
        Assert.assertEquals("Color not matched",buttonColor,calculatorTestPage.getButtonColorHex(color));
    }

    @Then("i should be able to see result as {string}")
    public void iShouldBeAbleToSeeResult(String result) {
        Assert.assertEquals("Incorrect Result",result,calculatorTestPage.getResult());
    }

    @When("i enter {string} and press {string} and enter {string}")
    public void iEnterAndPressAndEnter(String num1, String function, String num2) {
        calculatorTestPage.clickNumButton(num1);
        calculatorTestPage.clickFunctionButton(function);
        calculatorTestPage.clickNumButton(num2);
        calculatorTestPage.clickFunctionButton("Equals");
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("i should be able to see page title as {string}")
    public void iShouldBeAbleToSeePageTitleAs(String pageTitle) {
        Assert.assertTrue("Page title not matched",calculatorTestPage.validatePageTitle(pageTitle));
    }
}

