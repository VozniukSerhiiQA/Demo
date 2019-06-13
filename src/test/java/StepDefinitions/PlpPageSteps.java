package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locator.Pages.XPplp;
import locator.XPMenu;
import locator.idObjects;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class PlpPageSteps {

    private WebDriver driver;

    public PlpPageSteps() {
        driver = Hook.driver;
    }



        @When("^I click on \"([^\"]*)\" PLP category$")
    public void iClickOnPLPCategory(String arg0) {

            Actions action = new Actions(driver);
            WebElement over = driver.findElement(By.xpath(XPMenu.Menu1));
            action.moveToElement(over).perform();

            if (arg0.equals("Blouses")) {

                driver.findElement(By.xpath(XPMenu.Menu1Sub1plp2)).click();
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                driver.findElement(By.xpath(XPplp.BannerPlp)).isDisplayed();

            }
            else {
                Assert.fail("Error - wrong PLP category");
            }
        }

    @Then("^I see PLP page$")
    public void iSeePLPPage() {
        driver.findElement(By.id(idObjects.ViewGrid)).isDisplayed();
        driver.findElement(By.id(idObjects.ViewList)).isDisplayed();
        driver.findElement(By.id(idObjects.ProductSorting)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringSizeS)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeM)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeL)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringCompositionCotton)).isDisplayed();

    }

    @Then("^I see \"([^\"]*)\" button on product$")
    public void iSeeButtonOnProduct(String arg0) {

        Actions action = new Actions(driver);
        WebElement over = driver.findElement(By.xpath(XPplp.Product1));
        action.moveToElement(over).perform();

        if (arg0.equals("Add to cart")) {
            driver.findElement(By.xpath(XPplp.ProductBtnAddToCart)).isDisplayed();
        }
        else if (arg0.equals("More")) {
            driver.findElement(By.xpath(XPplp.ProductBtnMore)).isDisplayed();
        }
        else if (arg0.equals("Quick view")) {
            driver.findElement(By.xpath(XPplp.ProductBtnQuickView)).isDisplayed();
        }
        else {
            Assert.fail("Error - wrong Btn on product");
        }
    }
}

