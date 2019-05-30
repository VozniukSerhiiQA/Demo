package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
        format={"pretty","html:test-output","json:test-output/output.json"},
        features = "C:\\MyHome\\Demo\\src\\test\\java\\Features", //folder where features are located
        glue={"StepDefinitions"}  //folder for step definitions
        ,tags = {"@Ready"}
        //,tags = {"@InProgress"}
)

public class TestRunner {
//    public void Stop(Scenario scenario){
//        System.out.println(scenario.getName());
//    }
}