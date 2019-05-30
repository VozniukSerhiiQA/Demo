package StepDefinitions;

import XPath.Breadcrumbs;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ClpPageSteps {

    WebDriver driver;

    public ClpPageSteps() {
        driver = Hook.driver;
    }


    @Then("^I see CLP page$")
    public void iSeeCLPPage() {
        driver.findElement(By.xpath(Breadcrumbs.Women)).isDisplayed();

    }
}
