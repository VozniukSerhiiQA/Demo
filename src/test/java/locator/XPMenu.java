package locator;

public class XPMenu {
    public static String Menu1 = "//div[@id='block_top_menu']//li/a[contains(text(),'Women')]";
    public static String Menu2 = "//div[@id='block_top_menu']//li/a[contains(text(),'Dresses')]";
    public static String Menu3 = "//div[@id='block_top_menu']//li/a[contains(text(),'T-shirts')]";

    public static String Menu1Sub1 = "//div[@id='block_top_menu']//li/a[contains(text(),'Women')]/..//a[contains(text(),'Tops')]";
    public static String Menu1Sub2 = "//div[@id='block_top_menu']//li/a[contains(text(),'Women')]/..//a[contains(text(),'Dresses')]";

    public static String Menu1Sub1plp2 = "//div[@id='block_top_menu']//a[1][contains(text(),'Blouses')]";

    public static String CategoryBlockDresses = "//*[@id='categories_block_left']/h2[contains(text(),'Dresses')]";

}
