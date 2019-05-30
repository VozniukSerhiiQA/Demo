package StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MyAccountPageSteps {


    WebDriver driver;

    public MyAccountPageSteps() {
        driver = Hook.driver;
    }



    @Then("^I see My Account$")
    public void iSeeMyAccount() {
        driver.findElement(By.xpath("//ul[@class='myaccount-link-list']//span[contains(text(),'Order history and details')]")).isDisplayed();
        driver.findElement(By.xpath("//ul[@class='myaccount-link-list']//span[contains(text(),'My credit slips')]")).isDisplayed();
        driver.findElement(By.xpath("//ul[@class='myaccount-link-list']//span[contains(text(),'My addresses')]")).isDisplayed();
        driver.findElement(By.xpath("//ul[@class='myaccount-link-list']//span[contains(text(),'My personal information')]")).isDisplayed();
        driver.findElement(By.xpath("//ul[@class='myaccount-link-list']//span[contains(text(),'My wishlists')]")).isDisplayed();

        driver.findElement(By.xpath("//div[@class='header_user_info']//span[contains(text(),'Serhii Vozniuk')]")).isDisplayed();

    }
}
