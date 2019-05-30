package StepDefinitions;

import XPath.Breadcrumbs;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class LoginPageSteps {
    WebDriver driver;

    public LoginPageSteps() {
        driver = Hook.driver;
    }

    @Then("^I see Create an account form$")
    public void iSeeCreateAnAccountForm() {
        driver.findElement(By.xpath(Breadcrumbs.Authentication)).isDisplayed();
        driver.findElement(By.id("SubmitCreate")).isDisplayed();
    }

    @Then("^I see Sign In form$")
    public void iSeeSignInForm() {
        driver.findElement(By.id("SubmitLogin")).isDisplayed();
    }

}
