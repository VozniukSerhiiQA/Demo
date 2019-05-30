package StepDefinitions;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class RegistrationPageSteps {

    WebDriver driver;

    public RegistrationPageSteps() {
        driver = Hook.driver;
    }

    @And("^I create a user$")
    public void iCreateAUser() {

        //Get Date
        Date date = Calendar.getInstance().getTime();
        DateFormat dateFormat = new SimpleDateFormat("MMMddyyyyhhmmss");
        String variable_date = dateFormat.format(date);
        System.out.println(variable_date);

        driver.findElement(By.id("email_create")).sendKeys("test+"+variable_date+"@grr.la");
        driver.findElement(By.id("SubmitCreate")).click();
        driver.findElement(By.id("id_gender1")).click();
        driver.findElement(By.id("customer_firstname")).sendKeys("Serhii"+variable_date);
        driver.findElement(By.id("customer_lastname")).sendKeys("Vozniuk"+variable_date);
        driver.findElement(By.id("passwd")).sendKeys("SerhiiVozniuk");

        Select drpDate = new Select(driver.findElement(By.id("days")));
        drpDate.selectByValue("31");

        Select drpMonths = new Select(driver.findElement(By.id("months")));
        drpMonths.selectByValue("12");

        Select drpYears = new Select(driver.findElement(By.id("years")));
        drpYears.selectByValue("1986");

        JavascriptExecutor je = (JavascriptExecutor) driver;
        WebElement companyScroll = driver.findElement(By.id("company"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", companyScroll);
        // Extract the text and verify
        System.out.println(companyScroll.getText());

        driver.findElement(By.id("firstname")).sendKeys("Serhii"+variable_date);
        driver.findElement(By.id("lastname")).sendKeys("Serhii"+variable_date);
        driver.findElement(By.id("company")).sendKeys("Autotester");
        driver.findElement(By.id("address1")).sendKeys("Albany Ave");
        driver.findElement(By.id("city")).sendKeys("Brooklyn");


        WebElement phone_mobileScroll = driver.findElement(By.id("phone_mobile"));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", phone_mobileScroll);
        // Extract the text and verify
        System.out.println(phone_mobileScroll.getText());


        driver.findElement(By.id("postcode")).sendKeys("11214");
        driver.findElement(By.id("phone_mobile")).sendKeys("1231231233");

        driver.findElement(By.id("alias")).clear();
        driver.findElement(By.id("alias")).sendKeys("Test address");

        Select drpState = new Select(driver.findElement(By.id("id_state")));
        drpState.selectByValue("32");
        driver.findElement(By.id("submitAccount")).click();


    }



    @Then("^I see an alert of invalid user creation$")
    public void iSeeAnAlertOfInvalidUserCreation() {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//*[@class='alert alert-danger']"));
        driver.findElement(By.xpath("//*[@class='alert alert-danger']/ol/li[1]/b[contains(text(),'lastname')]")).isDisplayed();
        driver.findElement(By.xpath("//*[@class='alert alert-danger']/ol/li[2]/b[contains(text(),'firstname')]")).isDisplayed();
    }
}
