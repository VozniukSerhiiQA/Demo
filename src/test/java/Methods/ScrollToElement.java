package Methods;

import StepDefinitions.Hook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ScrollToElement {

    private static WebDriver driver;


    public static Boolean scrollByID(String scrolling) {
        driver = Hook.driver;
        JavascriptExecutor je = (JavascriptExecutor) driver;
        WebElement ScrollToIdElement = driver.findElement(By.id(scrolling));
        // now execute query which actually will scroll until that element is not appeared on page.
        je.executeScript("arguments[0].scrollIntoView(true);", ScrollToIdElement);
        // Extract the text and verify
        return true;
    }

    public static Boolean scrollByXPath(String scrolling) {
        driver = Hook.driver;
        JavascriptExecutor je = (JavascriptExecutor) driver;
        WebElement ScrollToXpathElement = driver.findElement(By.xpath(scrolling));
        je.executeScript("arguments[0].scrollIntoView(true);", ScrollToXpathElement);
        return true;
    }
}
