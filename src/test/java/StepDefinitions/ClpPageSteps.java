package StepDefinitions;

import locator.XPBreadcrumbs;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ClpPageSteps {

   private WebDriver driver;

    public ClpPageSteps() {
        driver = Hook.driver;
    }


    @Then("^I see CLP page$")
    public void iSeeCLPPage() {
        driver.findElement(By.xpath(XPBreadcrumbs.Women)).isDisplayed();

    }
}
