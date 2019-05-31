package StepDefinitions;

import locator.XPBreadcrumbs;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static locator.idObjects.*;


public class LoginPageSteps {
    private WebDriver driver;

    public LoginPageSteps() {
        driver = Hook.driver;
    }

    @Then("^I see Create an account form$")
    public void iSeeCreateAnAccountForm() {
        driver.findElement(By.xpath(XPBreadcrumbs.Authentication)).isDisplayed();
        driver.findElement(By.id(SubmitCreate)).isDisplayed();
    }

    @Then("^I see Sign In form$")
    public void iSeeSignInForm() {
        driver.findElement(By.id(SubmitLogin)).isDisplayed();
    }

}
