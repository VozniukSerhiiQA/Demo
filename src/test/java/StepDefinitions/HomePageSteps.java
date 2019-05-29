package StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePageSteps {
    WebDriver driver;

    public HomePageSteps() {
        driver = Hook.driver;
    }

    String elemSignin = "//nav//a[contains(text(),'Sign in')]";


    @Given("^Home Page$")
    public void homePage() {

        String logo = "//img[@class='logo img-responsive']";
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

        driver.findElement(By.xpath(logo));
    }

    @Then("^footer is correct$")
    public void footerIsCorrect() {
        // Create instance of Javascript executor
        JavascriptExecutor je = (JavascriptExecutor) driver;

        String MyAcc = "//footer//*[contains(text(),'My account')]";
        String Info = "//footer//*[contains(text(),'Information')]";

        //Identify the WebElement which will appear after scrolling down
        WebElement footerScroll1 = driver.findElement(By.xpath("//footer//*[contains(text(),'My account')]"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", footerScroll1);
        // Extract the text and verify
        System.out.println(footerScroll1.getText());
        driver.findElement(By.xpath(""+MyAcc+"/../../div/ul/li/a[contains(text(),'My orders')]")).isDisplayed();
        driver.findElement(By.xpath(""+MyAcc+"/../../div/ul/li/a[contains(text(),'My credit slips')]")).isDisplayed();
        driver.findElement(By.xpath(""+MyAcc+"/../../div/ul/li/a[contains(text(),'My addresses')]")).isDisplayed();
        driver.findElement(By.xpath(""+MyAcc+"/../../div/ul/li/a[contains(text(),'My personal info')]")).isDisplayed();

        WebElement footerScroll2 = driver.findElement(By.xpath("//footer//*[contains(text(),'Information')]"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", footerScroll2);
        // Extract the text and verify
        System.out.println(footerScroll2.getText());

        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Specials')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'New products')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Best sellers')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Our stores')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Contact us')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Terms and conditions of use')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'About us')]")).isDisplayed();
        driver.findElement(By.xpath(""+Info+"/../ul/li/a[contains(text(),'Sitemap')]")).isDisplayed();

    }


    @Then("^menu is correct$")
    public void menuIsCorrect() {

        String Menu1 = "//div[@id='block_top_menu']//li/a[contains(text(),'Women')]";
        String Menu2 = "//div[@id='block_top_menu']//li/a[contains(text(),'Dresses')]";
        String Menu3 = "//div[@id='block_top_menu']//li/a[contains(text(),'T-shirts')]";

        // Create instance of Javascript executor
        JavascriptExecutor je = (JavascriptExecutor) driver;
        //Identify the WebElement which will appear after scrolling down
        WebElement MenuScroll = driver.findElement(By.xpath("//div[@id='block_top_menu']//li/a[contains(text(),'Women')]"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", MenuScroll);
        // Extract the text and verify
        System.out.println(MenuScroll.getText());

        driver.findElement(By.xpath(Menu1)).isDisplayed();
        driver.findElement(By.xpath(Menu2)).isDisplayed();
        driver.findElement(By.xpath(Menu3)).isDisplayed();
    }

    @Then("^elements are correct$")
    public void loginIsCorrect() throws Throwable {

        // Create instance of Javascript executor
        JavascriptExecutor je = (JavascriptExecutor) driver;
        //Identify the WebElement which will appear after scrolling down
        WebElement MenuScroll = driver.findElement(By.id("contact-link"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", MenuScroll);
        // Extract the text and verify
        System.out.println(MenuScroll.getText());

        driver.findElement(By.xpath(elemSignin)).isDisplayed();
        driver.findElement(By.id("contact-link")).isDisplayed();
        driver.findElement(By.id("searchbox")).isDisplayed();
    }

    @When("^I navigate to Login page$")
    public void iNavigateToLoginPage() throws Throwable {
        driver.findElement(By.xpath(elemSignin)).click();
    }


}
