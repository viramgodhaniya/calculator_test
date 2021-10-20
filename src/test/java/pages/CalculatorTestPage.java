package pages;

import config.BrowserLaunch;
import org.openqa.selenium.By;
import org.openqa.selenium.support.Color;

public class CalculatorTestPage extends BrowserLaunch {

    private String actualPageTitle;
    private String acButtonColor;
    private String equalsButtonColor;
    private By acButton = By.id("btnAC");
    private By equalsButton = By.id("btnEquals");
    private By num1Button = By.id("btnOne");
    private By num2Button = By.id("btnTwo");
    private By num3Button = By.id("btnThree");
    private By num4Button = By.id("btnFour");
    private By num5Button = By.xpath("//button[contains(@id,'btnFive')]");
    private By num6Button = By.id("btnSix");
    private By num7Button = By.id("btnSeven");
    private By num8Button = By.id("btnEight");
    private By num9Button = By.id("btnNine");
    private By num0Button = By.id("btnZero");
    private By additionButton = By.id("btnAdd");
    private By functionResult = By.xpath("//div[contains(@class,'current-input data-current-input')]");
    private By multiplicationButton = By.id("btnMultiply");
    private By divisionButton = By.id("btnDivide");
    private By subButton = By.id("btnSubtract");

    public void getCalculatorUrl(String url) {
        driver.get(url);
    }

    public void getPageTitle() {
        driver.getTitle();
    }

    public boolean validatePageTitle(String expectedTitle) {
        actualPageTitle = driver.getTitle();
        if (actualPageTitle.equalsIgnoreCase(expectedTitle)) {
            return true;
        }
        return false;
    }

    public String getButtoncolor(String button) {
        switch (button) {
            case "AC":
                acButtonColor = Color.fromString(driver.findElement(acButton).getCssValue("background-color")).asHex();
                return acButtonColor;
            case "Equals":
                equalsButtonColor = Color.fromString(driver.findElement(equalsButton).getCssValue("background-color")).asHex();
                return equalsButtonColor;
        }
        return null;
    }

    public String getButtonColorHex(String color) {
        switch (color) {
            case "Red":
               return "#ff5952";
            //return "#ff5955";
            case "Green":
                return "#008000";
        }
        return null;
    }

    public void clickNumButton(String num) {
        switch (num) {
            case "1":
                driver.findElement(num1Button).click();
                break;
            case "2":
                driver.findElement(num2Button).click();
                break;
            case "3":
                driver.findElement(num3Button).click();
                break;
            case "4":
                driver.findElement(num4Button).click();
                break;
            case "5":
                driver.findElement(num5Button).click();
                break;
            case "6":
                driver.findElement(num6Button).click();
                break;
            case "7":
                driver.findElement(num7Button).click();
                break;
            case "8":
                driver.findElement(num8Button).click();
                break;
            case "9":
                driver.findElement(num9Button).click();
                break;
            case "0":
                driver.findElement(num0Button).click();
                break;
            case "11":
                driver.findElement(num1Button).click();
                driver.findElement(num1Button).click();
                break;
        }
    }

    public void clickFunctionButton(String function) {
        switch (function) {
            case "Addition":
                driver.findElement(additionButton).click();
                break;
            case "Equals":
                driver.findElement(equalsButton).click();
                break;
            case "Multiplication":
                driver.findElement(multiplicationButton).click();
                break;
            case "Division":
                driver.findElement(divisionButton).click();
                break;
            case "Subtraction":
                driver.findElement(subButton).click();
                break;
        }
    }

    public String getResult() {
        return driver.findElement(functionResult).getText();
    }


}
