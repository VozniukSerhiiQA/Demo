package locator.Pages;

public class XPRegistration {
    
    public static String WarningFirstName = "//*[@class='alert alert-danger']/ol/li[2]/b[contains(text(),'firstname')]";
    public static String WarningLastName = "//*[@class='alert alert-danger']/ol/li[1]/b[contains(text(),'lastname')]";
    public static String WarningPopUp = "//*[@class='alert alert-danger']";

    public static String MyAddressFirstName = "//p/input[@id='firstname']";
    public static String MyAddressLastName = "//p/input[@id='lastname']";

    public static String MyAPersonalInfoFirstName = "//div/input[@id='customer_firstname']";
    public static String MyAPersonalInfoLastName = "//div/input[@id='customer_lastname']";

}
