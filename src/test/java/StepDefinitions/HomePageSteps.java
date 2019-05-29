package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePageSteps {
    WebDriver driver;

    @Given("^Home Page$")
    public void homePage() throws Throwable {
        driver = Hook.driver;
        System.out.println("Given HomePage");
        String logo = "//img[@class='logo img-responsive']";
        String url = "http://automationpractice.com/index.php";
        driver.navigate().to(url);
        //driver.get(url);
        System.out.println("\n" + "We are opening new browser : GC");

        // Storing URL in String variable
        String actualUrl = driver.getCurrentUrl();

        if (actualUrl.equals(url)){
            System.out.println("Verification Successful - The correct Url is opened.");
        }else{
            System.out.println("Verification Failed - An incorrect Url is opened.");
            //In case of Fail, you like to print the actual and expected URL for the record purpose
            System.out.println("Actual URL is : " + actualUrl);
            System.out.println("Expected URL is : " + url);
        }

        driver.findElement(By.xpath(logo));
    }

    @Then("^footer is correct$")
    public void footerIsCorrect() throws Throwable {

    }

    @Then("^menu is correct$")
    public void menuIsCorrect() throws Throwable {

    }

    @Then("^login is correct$")
    public void loginIsCorrect() throws Throwable {

    }
}
