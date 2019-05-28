package StepDeffinitions;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Hook {

    public static WebDriver driver;
    String url = "https://magento2.smarterspecies.com/";

    @Before
    public void Start() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get(url);
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
    }

    @After
    public void Stop(Scenario scenario) {
        if (scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        driver.close();
        System.out.println("\n" + "We are closing GC browser");
    }
}
