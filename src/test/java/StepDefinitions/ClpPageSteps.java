package StepDefinitions;

import locator.idObjects;
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
        driver.findElement(By.id(idObjects.ViewGrid)).isDisplayed();
        driver.findElement(By.id(idObjects.ViewList)).isDisplayed();
        driver.findElement(By.id(idObjects.ProductSorting)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringSizeS)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeM)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeL)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringColorBeige)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorBlack)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorBlue)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorYellow)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorWhite)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorOrange)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorGreen)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorPink)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringCompositionCotton)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringCompositionViscose)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringCompositionPolyester)).isDisplayed();

    }

    @Then("^I see sub-category on CLP page$")
    public void iSeeSubCategoryOnCLPPage() {
        driver.findElement(By.id(idObjects.ViewGrid)).isDisplayed();
        driver.findElement(By.id(idObjects.ViewList)).isDisplayed();
        driver.findElement(By.id(idObjects.ProductSorting)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringSizeS)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeM)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringSizeL)).isDisplayed();


        driver.findElement(By.id(idObjects.FilteringColorBlack)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorBlue)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringColorWhite)).isDisplayed();
        driver.findElement(By.id(idObjects.FilteringColorOrange)).isDisplayed();

        driver.findElement(By.id(idObjects.FilteringCompositionCotton)).isDisplayed();
    }
}
