package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Nikhil Docs\\eclipse workspace\\BehaviorFramework\\src\\"
				+ "main\\java\\Features\\contact.feature",//path of feature file
		glue= {"stepDefinitions"},//path of step definition file
		plugin= {"pretty","html:target/"
				+ "test-output"},
		dryRun=false,//used to map steps with the definitions.
		monochrome=true,//used to show the output in a readable format
		strict=true//to check if any step is not defined in step definition file.
		) 


public class TestRunner { 

}
