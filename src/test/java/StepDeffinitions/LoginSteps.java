package StepDeffinitions;


import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


import java.util.ArrayList;
import java.util.List;

public class LoginSteps {


    @Given("I navigate to the login page")
    public void iNavigateToTheLoginPage() {
        
    }

    @Then("I should the user form page")
    public void iShouldTheUserFormPage() {
        System.out.println("3");
    }



//   Data Table with User Password
    @And("I enter next for log in")
    public void iEnterNextForLogIn(DataTable table) {

        List<User> users = new ArrayList<User>();
        users = table.asList(User.class);

        for (User user : users){
            System.out.println("The userName is "+user.username);
            System.out.println("The passWord is "+user.password);
        }
    }



    public class User {

        public String username;
        public String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;

        }
    }


}
