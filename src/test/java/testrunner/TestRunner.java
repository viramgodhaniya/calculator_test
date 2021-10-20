package testrunner;

import config.BrowserLaunch;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/Features/CalculatorFunctionalityCheck.feature",
        glue= {"stepdefinitions"},
		plugin = {"pretty", "json:target/cucumber.json",
				"html:target/cucumber-html-report",
				"junit:target/cucumber.xml"}
		)
public class TestRunner {

	static BrowserLaunch browserLaunch = new BrowserLaunch();

	@BeforeClass
	public static void launchBrowser() {
		browserLaunch.launch();
	}

	@AfterClass
	public static void CloseBrowser() {
		browserLaunch.quitDriver();
	}
}
