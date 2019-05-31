package StepDefinitions;

import Methods.ScrollToElement;
import locator.XPFooter;
import locator.XPHeader;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import locator.XPMenu;

import static locator.idObjects.*;

public class HomePageSteps {
   private WebDriver driver;

    public HomePageSteps() {
        driver = Hook.driver;
    }


    @Given("^Home Page$")
    public void homePage() {


        String url = "http://automationpractice.com/index.php";
        driver.navigate().to(url);
        //driver.get(url);

        // Storing URL in String variable
        String actualUrl = driver.getCurrentUrl();

        if (actualUrl.equals(url)) {
            System.out.println("Verification Successful - The correct Url is opened.");
        } else {
            System.out.println("Verification Failed - An incorrect Url is opened.");
            //In case of Fail, you like to print the actual and expected URL for the record purpose
            System.out.println("Actual URL is : " + actualUrl);
            System.out.println("Expected URL is : " + url);
        }

        driver.findElement(By.xpath(XPHeader.logo));
    }

    @Then("^footer is correct$")
    public void footerIsCorrect() {

        ScrollToElement.scrollByXPath(XPFooter.MyAcc);
        driver.findElement(By.xpath(""+XPFooter.MyAcc+"/../../div/ul/li/a[contains(text(),'My orders')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.MyAcc+"/../../div/ul/li/a[contains(text(),'My credit slips')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.MyAcc+"/../../div/ul/li/a[contains(text(),'My addresses')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.MyAcc+"/../../div/ul/li/a[contains(text(),'My personal info')]")).isDisplayed();

        ScrollToElement.scrollByXPath(XPFooter.Info);

        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Specials')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'New products')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Best sellers')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Our stores')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Contact us')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Terms and conditions of use')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'About us')]")).isDisplayed();
        driver.findElement(By.xpath(""+XPFooter.Info+"/../ul/li/a[contains(text(),'Sitemap')]")).isDisplayed();

    }


    @Then("^menu is correct$")
    public void menuIsCorrect() {


        ScrollToElement.scrollByXPath(XPMenu.Menu1);

        driver.findElement(By.xpath(XPMenu.Menu1)).isDisplayed();
        driver.findElement(By.xpath(XPMenu.Menu2)).isDisplayed();
        driver.findElement(By.xpath(XPMenu.Menu3)).isDisplayed();
    }

    @Then("^elements are correct$")
    public void loginIsCorrect(){

        ScrollToElement.scrollByID(LinkContact);

        driver.findElement(By.xpath(XPHeader.elemSignin)).isDisplayed();
        driver.findElement(By.id(LinkContact)).isDisplayed();
        driver.findElement(By.id(SearchBox)).isDisplayed();
    }

    @When("^I navigate to Login page$")
    public void iNavigateToLoginPage() {
        driver.findElement(By.xpath(XPHeader.elemSignin)).click();
    }


    @When("^I click on \"([^\"]*)\" category$")
    public void iClickOnCategory(String arg0){
        if (arg0.equals("Women")) {
            driver.findElement(By.xpath(XPMenu.Menu1)).click();

        }
        else if (arg0.equals("Dresses")) {
            driver.findElement(By.xpath(XPMenu.Menu2)).click();
        }
        else {
            Assert.fail("Error - wrong category");
        }

    }
}
