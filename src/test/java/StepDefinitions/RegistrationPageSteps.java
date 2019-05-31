package StepDefinitions;


import Methods.GetDateAndTime;
import Methods.ScrollToElement;
import locator.Pages.XPRegistration;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.support.ui.Select;


import java.util.concurrent.TimeUnit;

import static locator.idObjects.*;

public class RegistrationPageSteps {

    private WebDriver driver;

    public RegistrationPageSteps() {
        driver = Hook.driver;
    }

///////////////////// N O T    V A L I D   U S E R
    @And("^I create an invalid user$")
    public void iCreateAnInvalidUser() {

        driver.findElement(By.id(CreateEmail)).sendKeys("test+"+GetDateAndTime.value()+"@grr.la");
        driver.findElement(By.id(SubmitBtnForNewUser)).click();
        driver.findElement(By.id(SelectGendrMr)).click();
        driver.findElement(By.xpath(XPRegistration.MyAPersonalInfoFirstName)).sendKeys("Serhii"+GetDateAndTime.value());
        driver.findElement(By.xpath(XPRegistration.MyAPersonalInfoLastName)).sendKeys("Vozniuk"+GetDateAndTime.value());
        driver.findElement(By.id(NewPasswordCreation)).sendKeys("SerhiiVozniuk");

        Select drpDate = new Select(driver.findElement(By.id(SelectDay)));
        drpDate.selectByValue("31");

        Select drpMonths = new Select(driver.findElement(By.id(SelectMonth)));
        drpMonths.selectByValue("12");

        Select drpYears = new Select(driver.findElement(By.id(SelectYear)));
        drpYears.selectByValue("1986");

        ScrollToElement.scrollByID(InputCompany);
        driver.findElement(By.xpath(XPRegistration.MyAddressFirstName)).clear();
        driver.findElement(By.xpath(XPRegistration.MyAddressFirstName)).sendKeys("Serhii"+GetDateAndTime.value());
        driver.findElement(By.xpath(XPRegistration.MyAddressLastName)).clear();
        driver.findElement(By.xpath(XPRegistration.MyAddressLastName)).sendKeys("Serhii"+GetDateAndTime.value());
        driver.findElement(By.id(InputCompany)).sendKeys("Autotester");
        driver.findElement(By.id(InputAddressFirst)).sendKeys("Albany Ave");
        driver.findElement(By.id(InputCity)).sendKeys("Brooklyn");

        ScrollToElement.scrollByID(InputMobilePhone);

        driver.findElement(By.id(InputPostCode)).sendKeys("11214");
        driver.findElement(By.id(InputMobilePhone)).sendKeys("1231231233");

        driver.findElement(By.id(InputAlias)).clear();
        driver.findElement(By.id(InputAlias)).sendKeys("Test address");

        Select drpState = new Select(driver.findElement(By.id(InputState)));
        drpState.selectByValue("32");
        driver.findElement(By.id(SubmitNewAccount)).click();


    }
///////////////////// V A L I D   U S E R

    @And("^I create valid user$")
    public void iCreateValidUser() {

        driver.findElement(By.id(CreateEmail)).sendKeys("test+"+GetDateAndTime.value()+"@grr.la");
        driver.findElement(By.id(SubmitBtnForNewUser)).click();
        driver.findElement(By.id(SelectGendrMr)).click();
        driver.findElement(By.xpath(XPRegistration.MyAPersonalInfoFirstName)).sendKeys("Serhii");
        driver.findElement(By.xpath(XPRegistration.MyAPersonalInfoLastName)).sendKeys("Vozniuk");
        driver.findElement(By.id(NewPasswordCreation)).sendKeys("SerhiiVozniuk");

        Select drpDate = new Select(driver.findElement(By.id(SelectDay)));
        drpDate.selectByValue("31");

        Select drpMonths = new Select(driver.findElement(By.id(SelectMonth)));
        drpMonths.selectByValue("12");

        Select drpYears = new Select(driver.findElement(By.id(SelectYear)));
        drpYears.selectByValue("1986");

        ScrollToElement.scrollByID(InputCompany);

        driver.findElement(By.xpath(XPRegistration.MyAddressFirstName)).clear();
        driver.findElement(By.xpath(XPRegistration.MyAddressFirstName)).sendKeys("Serhii");
        driver.findElement(By.xpath(XPRegistration.MyAddressLastName)).clear();
        driver.findElement(By.xpath(XPRegistration.MyAddressLastName)).sendKeys("Vozniuk");
        driver.findElement(By.id(InputCompany)).sendKeys("Autotester");
        driver.findElement(By.id(InputAddressFirst)).sendKeys("Albany Ave");
        driver.findElement(By.id(InputCity)).sendKeys("Brooklyn");


        ScrollToElement.scrollByID(InputMobilePhone);

        driver.findElement(By.id(InputPostCode)).sendKeys("11214");
        driver.findElement(By.id(InputMobilePhone)).sendKeys("1231231233");

        driver.findElement(By.id(InputAlias)).clear();
        driver.findElement(By.id(InputAlias)).sendKeys("Test address");

        Select drpState = new Select(driver.findElement(By.id(InputState)));
        drpState.selectByValue("32");
        driver.findElement(By.id(SubmitNewAccount)).click();


    }


    @Then("^I see an alert of invalid user creation$")
    public void iSeeAnAlertOfInvalidUserCreation() {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath(XPRegistration.WarningPopUp));
        driver.findElement(By.xpath(XPRegistration.WarningFirstName)).isDisplayed();
        driver.findElement(By.xpath(XPRegistration.WarningLastName)).isDisplayed();
    }
}
