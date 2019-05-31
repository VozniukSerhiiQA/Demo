package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        format={"pretty","html:test-output","json:test-output/output.json"},
        features = "C:\\MyHome\\Demo\\src\\test\\java\\Features", //folder where features are located
        glue={"StepDefinitions"}  //folder for step definitions
        ,tags = {"@InProgress"}
)

public class TestRunnerInProgress {
//    public void Stop(Scenario scenario){
//        System.out.println(scenario.getName());
//    }
}