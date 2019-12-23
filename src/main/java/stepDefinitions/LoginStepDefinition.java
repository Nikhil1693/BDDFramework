package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_already_on_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\Nikhil Docs\\eclipse workspace\\KeywordDrivenFW\\src\\main\\java\\executable\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.freecrm.com");
		}
	@When("^title of login page is CRM$")
	public void title() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void login(String username,String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void clickBtn() {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button'] ")).click();
	}
	
	@Then("^user is on home page$")
	public void home() {
		String homeTitle=driver.getTitle();
		System.out.println(homeTitle);
		Assert.assertEquals("Cogmento CRM",homeTitle);
	}
	
	@Then("^user clicks on Contacts link$")
		public void click_contact() throws InterruptedException{
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
		}
	
	@Then("^user clicks on New button$")
	public void click_new() throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button//i[@class = 'edit icon']")).click();
	}
	    
	@Then("^user enter contacts details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void enter_details(String firstname,String lastname,String position) throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.name("position")).sendKeys(position);
	}
	
	@Then("^user clicks on save button$")
	public void click_save() throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button//i[@class = 'save icon']")).click();
	}
	
	@Then("^user close the browser$")
	public void close_browser() {
		driver.close();
		
	}
}
