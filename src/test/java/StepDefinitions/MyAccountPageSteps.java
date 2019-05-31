package StepDefinitions;


import locator.Pages.XPMyAccount;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccountPageSteps {


   private WebDriver driver;

    public MyAccountPageSteps() {
        driver = Hook.driver;
    }


    @Then("^I see My Account$")
    public void iSeeMyAccount() {
        driver.findElement(By.xpath(XPMyAccount.OrderDetails)).isDisplayed();
        driver.findElement(By.xpath(XPMyAccount.CreditSlips)).isDisplayed();
        driver.findElement(By.xpath(XPMyAccount.MyAddress)).isDisplayed();
        driver.findElement(By.xpath(XPMyAccount.MyPersonalInfo)).isDisplayed();
        driver.findElement(By.xpath(XPMyAccount.MyWishList)).isDisplayed();
        driver.findElement(By.xpath(XPMyAccount.MyUserName)).isDisplayed();

    }
}
